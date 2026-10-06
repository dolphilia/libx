import pathlib, re, json, hashlib, html
from html.parser import HTMLParser

ROOT = pathlib.Path('/Users/dolphilia/github/libx')
SOURCE = ROOT / 'docs/notes/project-expansion/runs/evidence/2026-10-03-327/source/zlib-1.3.2'
OUT = ROOT / 'docs/notes/project-expansion/runs/evidence/2026-10-03-328'
OUT.mkdir(exist_ok=False)
TRIAL = OUT / 'trial'
TRIAL.mkdir()
sha = lambda b: hashlib.sha256(b).hexdigest()

def comments(text):
    # Scan strings as well as comments. Do not interpret comment-like strings.
    i = 0
    while i < len(text):
        if text[i:i+2] == '/*':
            end = text.find('*/', i + 2)
            assert end >= 0
            yield i, end + 2
            i = end + 2
        elif text[i] in '\"\'':
            quote = text[i]
            i += 1
            while i < len(text):
                if text[i] == '\\': i += 2
                elif text[i] == quote:
                    i += 1
                    break
                else: i += 1
        elif text[i:i+2] == '//':
            end = text.find('\n', i)
            i = len(text) if end < 0 else end
        else: i += 1

def clean_comment(raw):
    body = raw[2:-2]
    return '\n'.join(re.sub(r'^(\s*)\* ?', r'\1', line) for line in body.split('\n'))

class Visible(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.depth = 0
        self.blocks = []
    def handle_starttag(self, tag, attrs):
        if dict(attrs).get('data-block') is not None:
            assert not self.depth
            self.depth = 1
            self.blocks.append('')
        elif self.depth: self.depth += 1
    def handle_endtag(self, tag):
        if self.depth: self.depth -= 1
    def handle_data(self, text):
        if self.depth: self.blocks[-1] += text

records = []
for name in ['zlib.h', 'zconf.h']:
    raw = (SOURCE / name).read_bytes()
    text = raw.decode('utf-8')
    spans = []
    cursor = 0
    for start, end in comments(text):
        # Inline field/conditional comments stay in the original code context.
        left = text[text.rfind('\n', 0, start)+1:start]
        line_end = text.find('\n', end)
        right = text[end:len(text) if line_end < 0 else line_end]
        if left.strip() or right.strip(): continue
        if start > cursor: spans.append(('code', cursor, start))
        spans.append(('comment', start, end))
        cursor = end
    if cursor < len(text): spans.append(('code', cursor, len(text)))
    assert ''.join(text[a:b] for _, a, b in spans).encode() == raw
    blocks = []
    mapping = []
    expected = []
    for index, (kind, a, b) in enumerate(spans):
        original = text[a:b]
        display = clean_comment(original) if kind == 'comment' else original
        tag = 'div' if kind == 'comment' else 'pre'
        blocks.append(f'<{tag} class="{kind}" data-block="{index}">{html.escape(display)}</{tag}>')
        expected.append(display)
        mapping.append(dict(index=index, kind=kind, start=a, end=b,
                            lineStart=text.count('\n', 0, a)+1,
                            lineEnd=text.count('\n', 0, b)+1,
                            original=original, display=display,
                            originalSha256=sha(original.encode()), displaySha256=sha(display.encode())))
    page = '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>zlib 1.3.2 '+name+'</title><style>body{max-width:76ch;margin:2rem auto;padding:1rem;font:17px/1.65 system-ui}.comment{white-space:pre-wrap;overflow-wrap:anywhere;margin:1.3rem 0}pre{font:14px/1.5 monospace;background:#eee;padding:1rem;overflow:auto}</style><main><h1>zlib 1.3.2 '+name+'</h1><p>Conversion trial. Original notices retained. Unofficial formatting; no software execution.</p>'+''.join(blocks)+'</main></html>'
    parser = Visible()
    parser.feed(page)
    assert parser.blocks == expected
    (TRIAL / (name+'.html')).write_text(page)
    (OUT / (name+'.blocks.json')).write_text(json.dumps(mapping, ensure_ascii=False, indent=2)+'\n')
    # This is a lexical inventory, not an independent API completeness verdict.
    declarations = []
    for match in re.finditer(r'\bZEXTERN\b[^;]*;', text, re.S):
        symbol = re.search(r'\bZEXPORT(?:VA)?\s+(\w+)\s*\(', match.group())
        if symbol:
            declarations.append(dict(symbol=symbol.group(1), line=text.count('\n', 0, match.start())+1, declaration=match.group()))
    records.append(dict(file=name, sourceSha256=sha(raw), lines=len(text.splitlines()),
                        commentLexicalCount=len(list(comments(text))), displayBlocks=len(spans),
                        standaloneCommentBlocks=sum(k=='comment' for k, _, _ in spans),
                        reconstructedBytesEqual=True, parsedHtmlAllBlocksEqual=True,
                        lexicalDeclarations=declarations,
                        uniqueLexicalDeclarationSymbols=len(set(d['symbol'] for d in declarations)),
                        htmlSha256=sha(page.encode())))
(OUT / 'ZLIB_HEADER_TRIAL_MACHINE_CHECK.json').write_text(json.dumps(dict(
    status='passed', scope='two entire headers lossless segments / decoded HTML block text',
    records=records, nativeBrowser='pending', formalAstro='not-started',
    wholeConversionGate='unknown', limitations=['README/FAQ/man/license rendering not tested', 'No Japanese translation or semantic translation review', 'Declaration regex includes comments and conditional duplicates; not a standalone API completeness gate']), indent=2)+'\n')
print(json.dumps([{k:v for k,v in r.items() if k!='lexicalDeclarations'} for r in records], indent=2))
