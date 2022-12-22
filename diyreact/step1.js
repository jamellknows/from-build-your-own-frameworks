
//define package as a const 
// render 
// hypertext or create element function 
// scheduler or a work functions


//idea time if search without sorting - target renders  
const Didact = {
    createElement, 
    createTextElement,
    render
}

function createDom(fiber){
    const dom = element.type == "TEXT_ELEMENT"?
    document.createTextNode(""):
    document.createElement(fiber.type)
    const isProperty = key => key !== "children"
    Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
        dom[name] = fiber.props[name]
    })
   return dom
}

function render(element, container){
    wipRoot = {
        dom: container, 
        props: {
            children : [element],
        },
        alternate: currentRoot,
    }
    nextUnitOfWork = wipRoot
}

function createElement(type, props, ...children)
{
    return {
        type,
         props: {...props, children},
    }
}

function createTextElement(text){
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children :[],
        },
    }
}

function commitRoot(){
    commitWork(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
}

function commitWork(fiber){
    if(!fiber){
        return
    }
    const domParent = fiber.parent.dom 
    domParent.appendChild(fiber.dom)
    commitWork(fiber.child)
    commitWork(fiber.sibling)
}

let nextUnitOfWork = null
let wipRoot = null 

function workLoop(deadline){
    let shouldYield = false
    while(nextUnitOfWork && !shouldYield){
        nextUnitOfWork = performUnitOfWork(
            nextUnitOfWork
        )
        shouldYield = deadline.timeRemaining() < 1
    }
    requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

function performUnitOfWork(nextUnitOfWork){
    //TO add dom node 
    if(!fiber.dom){
        fiber.dom = createDom(fiber)
    }

        // to create new fibres
    const elements = fiber.props.children
    let index = 0
    let prevSibling = null
    while(index < elements.length){
        const element = elements[index]

        const newFiber = {
            type: element.type, 
            props: element.props,
            parent: fiber,
            dom: null,
        }
    }
    if(index == 0){
        fiber.child = newFiber
    }else {
        prevSibling.sibling = newFiber
    }
    prevSibling = newFiber
    index++
    // to return next unit of work 

    if(fiber.child){
        return fiber.child
    }
    let newFiber = fiber 
    while(nextFiber){
        if(nextFiber.sibling){
            return nextFiber.sibling
        }
        nextFiber = nextFiber.parent 
    }
}

function reconcileChildren(wipFiber, elements){
    let index = 0
    let prevSibling = null 
    while(index < elements.length){
        const element = elements[index]

        const newFiber = {
            type: element.type, 
            props: element.props, 
            parent: wipFiber, 
            dom: null, 
        }

        if(index === 0){
            wipFiber.child = newFiber
        }else{
            prevSibling.sibling = newFiber
        }
        prevSibling = newFiber 
        index++
    }
}

/** @jsx Didact.createElement */
const element = (
    `<div id = "foo">
        <a>bar</a>
        <b/>
    </div>`
    )

console.log(element)

function h(node, props, ...args)
{
    let children = args.length ? [].concat(...args) : null;
    return {node, props, children}
}
// const container = document.getElementById("root")
// ReactDOM.render(element, container)





console.log(Didact.createElement('h1', {id: '2', dd: 3}, "heel"))


console.log(Didact.createTextElement("hello"))



const element2 = Didact.createElement(
    Didact.createElement("")
)