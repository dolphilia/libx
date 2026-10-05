"""Serialize translated Sphinx article as a raw HTML Markdown block.
Leading encoded whitespace before <article> causes Markdown inline parsing;
code blocks must keep the exact frozen canonical HTML instead of reserializing.
"""
import re

def serialize_article(article, original_body):
    assert article.name == 'article' and 'libuv-document' in article.get('class', [])
    rendered = (str(article).replace('*', '&#42;').replace('_', '&#95;')
                .replace('`', '&#96;').replace('\\', '&#92;').replace('\n', '&#10;'))
    original_codes = re.findall(r'<pre(?:\s[^>]*)?>.*?</pre>', original_body, flags=re.S)
    assert len(original_codes) == len(article.select('pre'))
    iterator = iter(original_codes)
    rendered = re.sub(r'<pre(?:\s[^>]*)?>.*?</pre>', lambda match: next(iterator), rendered, flags=re.S)
    assert rendered.startswith('<article ')
    return rendered
