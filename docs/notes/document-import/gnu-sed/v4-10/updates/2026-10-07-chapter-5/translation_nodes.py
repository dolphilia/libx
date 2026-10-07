import re
def selected_nodes(s):
 nodes=s.find_all(['h2','h3','h4','h5','p']);nodes += [dt for dt in s.select('dt') if any(re.search('[A-Za-z]{2,}',str(t)) for t in dt.find_all(string=True) if not t.find_parent('code'))];nodes += [li for li in s.select('li') if not li.find(['p','li'])];nodes += [cell for cell in s.select('th,td') if not cell.find(['p','pre'])];nodes += s.select('pre i');return nodes
