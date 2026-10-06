import {fromHtml} from 'hast-util-from-html';
export default function cjsonHtml(){return tree=>{
 const visit=parent=>{if(!parent.children)return;parent.children=parent.children.flatMap(node=>{
  if(node.type!=='raw'){visit(node);return [node];}
  const blocks=[];const text=node.value.replace(/<pre\b([^>]*)>([\s\S]*?)<\/pre>/g,(_,attrs,inner)=>{const index=blocks.length;blocks.push(inner);return `<pre${attrs}>CJSONPRE${index}END</pre>`;});
  const nodes=fromHtml(text,{fragment:true}).children;
  const promote=n=>{if(n.type==='element'&&n.tagName==='pre'){
    const token=n.children.map(x=>x.value??'').join('');const m=/^CJSONPRE(\d+)END$/.exec(token);if(!m)throw Error('Unmatched cJSON pre placeholder '+JSON.stringify({token,raw:node.value}));
    const inner=fromHtml(blocks[Number(m[1])],{fragment:true}).children;
    n.children=inner.length===1&&inner[0].tagName==='code'?inner:[{type:'element',tagName:'code',properties:{},children:inner}];return;
   }
   if(n.type==='element'&&/^h[1-6]$/.test(n.tagName)){
    const anchor=n.children.find(x=>x.tagName==='a'&&x.properties?.name);if(anchor)n.properties.id=anchor.properties.name;
   }
   n.children?.forEach(promote);
  };nodes.forEach(promote);return nodes;
 });};visit(tree);
};}
