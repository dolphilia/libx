import json, sys
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
