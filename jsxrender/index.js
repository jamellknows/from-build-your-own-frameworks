// The Pragma 
// You declare this per file or per function 
// To tell your tanspiler (e.g. Babel) 
// Babel - What is used for packages - transpiler
// The name of a function that should be called at runtime for each node
// In the example they inject calls to an h() function for each node 

// @jsx h

// Transpilers convert es6 and 7 into javascript 
// babel supports transpilling jsx right out of the box 


// before - written
 /* let foo = <div id ="foo">Hello!</div> */

// After - run
/* var foo = h('div', {id:"foo"}, 'Hello!') */
// The function is called h because it transpiles html and javascript 
// hyperscript 

function h(nodeName, attributes, ...args){
    let children = args.length ? [].concat(...args) : null;
    return {nodeName, attributes, children}
}

//console.log(h('h1', {id: "text"}, "What's up"))
/*
Use {} to return multiple variables more then one variable is an object
The ... is a rest pattern it collects all other variables into the aray 
The concat(...args) is a spread operator: It takes the array and expands it into 
arguments to concat()
The use of concat is to collapse any nested arrays of child nodes
*/

function render(vnode){
    // String just converts to #text Nodes:
    if (vnode.split) return document.createTextNode(vnode)

    let n = document.createElement(vnode.nodeName);
    //copies the attributes into the created element
    let a = vnode.attributes || {};
    Object.keys(a).forEach(k => n.setAttribute(k, a[k]));

    //render and then append child nodes

    (vnode.children || []).forEach( c=>n.appendChild(render(c))) // this wil call again until completely rendered
    return n 
}
//jsx -> h()
//h() -> render()

// jsx -> vdom
let vdom = h('h1', {id:'foo'}, "Hello")

//vdom => dom

let dom= render(vdom)

//add the tree to <body></body>

document.body.appendChild(dom)

// I would think call h function to render 

// Problem with this document not refernced

// continuing 


let items = ['foo', 'bar', 'baz']

// create one list item given some text 

function item(text){
    return<li>{text}</li>
}

// a "view" with "iteration" and "partial"

let list = render(
    <ul>
        {items.map(item)}
    </ul>
);

// can not run this beacuse document not defined 