import re

def selected_nodes(soup):
    selected=[]; selected_ids=set()
    for node in soup.find_all(['h1','h2','h3','h4','h5','h6','p','dt','dd','li','th','td']):
        if node.find_parent('pre'):continue
        if node.name in ['dd','td'] and node.find(['p','li','table','dl']):continue
        if any(id(p) in selected_ids for p in node.parents):continue
        if node.name=='dt' and not any(re.search('[A-Za-z]{2,}',str(t)) for t in node.find_all(string=True) if not t.find_parent(['code','samp','var'])):continue
        selected.append(node);selected_ids.add(id(node))
    return selected
