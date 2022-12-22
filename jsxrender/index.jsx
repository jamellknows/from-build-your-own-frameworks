function h(nodeName, attributes, ...args)
{
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}
// pass vdom to be rendered 

function render(vnode)
{
    if(vnode.split) return document.createTextNode(vnode);

    let n = document.createElement(vnode.nodeName);

    let a = vnode.attributes || {};
    Object.keys(a).forEach(k => n.setAttribute(k, a[k]));

    (vnode.children || []).forEach(c => n.appendChild(render(c)));
    return n 

}

let h1 = h('h1', {id:'text'}, "hello world")
console.log(h1)
let rend = render(h1)
console.log(rend)
document.body.appendChild(rend)
// if you wanted to append more than one element 
// you would have to render each one and then 
// append to the body
// so instead of having to render 
 

// function appender(render)
// {
//     for(let i = 0; i < render.length; i++)
//     {
//         document.appendChild(render[i])
//     }
// }