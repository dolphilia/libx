from pathlib import Path
from bs4 import BeautifulSoup
import json, re, hashlib

U = Path(__file__).resolve().parent
plan = json.loads((U / 'PAGE_PLAN.json').read_text())
data = json.loads((U / 'TRANSLATION_DATA.json').read_text())
labels = {'All-Options': 'tarの全オプション', 'Operation-Summary': '操作', 'Option-Summary': 'tarのオプション', 'Short-Option-Summary': '短いオプションの対応表', 'Position_002dSensitive-Options': '位置に依存するオプション', 'append': '--appendによる既存アーカイブへのファイル追加', 'concatenate': '--concatenateによるアーカイブの結合', 'compare': 'アーカイブメンバーとファイルシステムの比較', 'create': 'アーカイブの作成', 'delete': '--deleteによるアーカイブメンバーの削除', 'extract': 'アーカイブからのメンバーの展開', 'list': 'アーカイブの一覧表示', 'update': 'アーカイブの更新', 'directory': '作業ディレクトリの変更', 'files': 'ファイルからの名前の読み込み', 'nul': 'NULで終端するファイル名', 'input-name-quoting': '入力ファイル名の引用', 'recurse': 'ディレクトリへの再帰', 'anchored-patterns': '先頭に固定したパターン', 'case-insensitive': '大文字と小文字を区別しない照合', 'wildcards': 'ワイルドカードのパターンと照合'}
rows = []
for r in plan['rows']:
    key = Path(r['page']).stem
    if key not in data:
        continue
    raw = (U / 'preferred/en' / r['page']).read_text()
    fm, body = raw.split('---', 2)[1:]
    s = BeautifulSoup(body, 'html.parser')
    b = s.select_one('.gnu-tar-original-content')
    ps = b.select('p')
    t = data[key]
    assert len(ps) == len(t['paragraphs'])
    for p, text in zip(ps, t['paragraphs']):
        anchors = list(p.select('a[href]'))
        assert set(re.findall(r'\{a(\d+)\}', text)) == set(map(str, range(len(anchors))))
        text = re.sub(r'(?<![A-Za-z`])tar(?![A-Za-z`])', '`tar`', text)
        text = re.sub(r'`([^`]+)`', r'<code class="code">\1</code>', text)
        for j, a in enumerate(anchors):
            fragment = a['href'].partition('#')[2]
            if fragment in labels:
                a.clear()
                a.string = labels[fragment]
            text = text.replace('{a' + str(j) + '}', str(a))
        p.clear()
        p.extend(BeautifulSoup(text, 'html.parser').contents)
    h = b.find(re.compile('^h[1-6]$'))
    h.clear()
    h.string = t['title']
    for a in b.select('ul.mini-toc a[href]'):
        a.clear()
        a.string = labels[a['href'].partition('#')[2]]
    if key == '43-short-option-summary':
        for th, title in zip(b.select('th'), ['短いオプション', '参照先']):
            th.string = title
        td = next(x for x in b.select('td') if 'When extracting' in x.get_text())
        p = td.find('p').extract()
        anchors = list(td.select('a[href]'))
        assert len(anchors) == 2
        html = '展開時は' + str(anchors[0]) + 'と同じです。作成時は' + str(anchors[1]) + 'と同じです。'
        td.clear()
        td.extend(BeautifulSoup(html, 'html.parser').contents)
        td.append(p)
    for a in b.select('a[href]'):
        a['href'] = a['href'].replace('/v1-35/en/', '/v1-35/ja/')
    fm = re.sub(r'^title: .+$', 'title: ' + json.dumps(t['title'], ensure_ascii=False), fm, flags=re.M)
    ja = U / 'preferred/ja' / r['page']
    ja.parent.mkdir(parents=True, exist_ok=True)
    ja.write_text('---' + fm + '---' + str(s) + '\n')
    rows.append({'page': r['page'], 'enSHA256': hashlib.sha256((U / 'preferred/en' / r['page']).read_bytes()).hexdigest(), 'jaSHA256': hashlib.sha256(ja.read_bytes()).hexdigest(), 'paragraphs': len(ps), 'status': 'draft-not-content-reviewed'})
(U / 'TRANSLATION.json').write_text(json.dumps({'status': 'partial-draft-not-content-reviewed', 'translatedDraftPages': len(rows), 'totalPages': len(plan['rows']), 'paragraphs': sum(r['paragraphs'] for r in rows), 'pages': rows, 'pending': [r['page'] for r in plan['rows'] if Path(r['page']).stem not in data], 'limits': 'Four small sections drafted; complete3.4.2 options219paragraphs and footnote5 remain untranslated. All separate meaning reviews, rendered checks and publication pending.'}, ensure_ascii=False, indent=2) + '\n')
print(len(rows), 'Japanese drafts;', sum(r['paragraphs'] for r in rows), 'paragraphs; full meaning review pending')
