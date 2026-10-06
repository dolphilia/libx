export default function cjsonSource(){return (tree,file)=>{
 const body=String(file.value).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,'');
 if(!body.trimStart().startsWith('<'))throw Error('cJSON trial requires canonical HTML body');
 tree.children=[{type:'html',value:body}];
};}
