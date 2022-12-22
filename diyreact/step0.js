/*
step 1: create element function 
step 2: the render function 
step 3: concurrent mode
step 4: fibres
step 5: render and commit phases 
step 6: reconciliation 
step 7: function components
step 8: hooks
*/


// IN JAVASCRIPT 

// const element = `<h1 title = "foo"> Hello</h1`
// const container = document.getElementById('root')
// ReactDOM.render(element,container)


// jsx is transforme to js by transpilers like babel 
// they replace the code inside the tags with a call 
// to create an element 
// passing the tage name, the props and the children as parameters


// React.createElement creates an object from its arguments 
// besides some validations 

//

// const element = React.createElement(
//     'h1', 
//     {title: "foo"},
//     "Hello"
// )


const element = {
    type: "h1", 
    props: {
        title: "foo", 
        children: "Hello",
    }
}

const node = document.createElement(element.type)
node['title'] = element.props.title
const text = document.createTextNode("")
text['nodeValue'] = element.props.children
node.appendChild(text)
container.appendChild(node)

