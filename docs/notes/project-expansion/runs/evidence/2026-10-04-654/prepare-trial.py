import hashlib, json, pathlib, shutil, subprocess, tarfile

root = pathlib.Path.cwd()
ev = root / 'docs/notes/project-expansion/runs/evidence/2026-10-04-654'
trial = pathlib.Path('/private/tmp/libx-mdbook-trial-654')
trial.mkdir(exist_ok=False)
archive = ev / 'mdbook-v0.5.4-aarch64-apple-darwin.tar.gz'
assert hashlib.sha256(archive.read_bytes()).hexdigest() == '03e8a6d8b13a2971e0b3280affd03b388373c1485e26f73407c3a76b0b1838df'
with tarfile.open(archive) as tf:
    members = tf.getmembers()
    assert len(members) == 1 and members[0].name == 'mdbook' and members[0].isfile()
    (trial / 'mdbook').write_bytes(tf.extractfile(members[0]).read())
    (trial / 'mdbook').chmod(0o755)
version = subprocess.check_output([str(trial / 'mdbook'), '--version'], text=True).strip()
assert version == 'mdbook v0.5.4', version
source = root / 'docs/notes/project-expansion/runs/evidence/2026-10-04-585/mdbook-2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d.tar.gz'
assert hashlib.sha256(source.read_bytes()).hexdigest() == '9800afa8e565117ca70f2f4fd690fcc67fbf230dfea4587b3f60a61e7c2bdda9'
with tarfile.open(source) as tf:
    prefix = tf.getmembers()[0].name.split('/')[0]
    for member in tf.getmembers():
        parts = pathlib.PurePosixPath(member.name).parts
        assert parts[0] == prefix and '..' not in parts
        dest = trial / 'source' / pathlib.Path(*parts[1:])
        if member.isdir():
            dest.mkdir(parents=True, exist_ok=True)
        elif member.isfile():
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(tf.extractfile(member).read())
        elif member.issym():
            assert not pathlib.PurePosixPath(member.linkname).is_absolute()
            target = (dest.parent / member.linkname).resolve()
            assert target.is_relative_to(trial / 'source')
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.symlink_to(member.linkname)
        else:
            raise AssertionError(member.name)
adapter = '''import json, sys
if len(sys.argv) > 1 and sys.argv[1] == "supports":
    raise SystemExit(0)
ctx, book = json.load(sys.stdin)
assert ctx["mdbook_version"] == "0.5.4"
mapping = {"{{ mdbook-version }}": "0.5.4", "{{ mdbook-semver }}": "0.5", "{{ mdbook-semver-break }}": "0.6.0"}
def walk(items):
    for item in items:
        if "Chapter" in item:
            chapter = item["Chapter"]
            for key, value in mapping.items():
                chapter["content"] = chapter["content"].replace(key, value)
            walk(chapter["sub_items"])
walk(book["sections"])
json.dump(book, sys.stdout)
'''
(trial / 'guide-helper.py').write_text(adapter)
(ev / 'guide-helper.py').write_text(adapter)
config = trial / 'source/guide/book.toml'
original = config.read_text()
old = 'command = "cargo run --quiet --manifest-path guide-helper/Cargo.toml"'
assert original.count(old) == 1
effective = original.replace(old, 'command = "python3 /private/tmp/libx-mdbook-trial-654/guide-helper.py"') + '\n[output.markdown]\n'
config.write_text(effective)
(ev / 'book.original.toml').write_text(original)
(ev / 'book.effective.toml').write_text(effective)
data = {'status': 'prepared', 'cliVersion': version, 'cliBinarySha256': hashlib.sha256((trial / 'mdbook').read_bytes()).hexdigest(), 'sourceArchiveSha256': hashlib.sha256(source.read_bytes()).hexdigest(), 'originalSourceCommit': '2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d', 'trialDirectory': str(trial), 'rootApplicationChanges': False, 'rootDependencyChanges': False, 'localLLMUsed': False, 'deviations': ['Only fixed guide-helper version substitutions use a Python protocol adapter; original Rust helper and Cargo version retained for audit.', 'Added built-in markdown renderer; original HTML renderer settings retained.'], 'commands': [str(trial / 'mdbook') + ' build ' + str(trial / 'source/guide')], 'conversionGatePassed': False}
(ev / 'TRIAL_PREPARED.json').write_text(json.dumps(data, indent=2) + '\n')
print(version + ': 隔離試験準備完了')
