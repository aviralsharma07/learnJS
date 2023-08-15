const rootNode = document.getRootNode();
const rootElement = rootNode.childNodes[1];
// console.log(rootElement);
// console.log(rootElement.childNodes); // NodeList(3) [head, text, body]

const headElementNode = rootElement.childNodes[0];
const textNode1 = rootElement.childNodes[1];
const bodyElementNode = rootElement.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

const headParentNode = headElementNode.parentNode;
// console.log(headParentNode);

// console.log(headElementNode.nextSibling); // Sibling Relation
// console.log(headElementNode.nextElementSibling); // Element


const h1 = document.querySelector("h1");
h1.parentNode.style.color = "red"; // h1.parentNode = div
h1.parentNode.style.backgroundColor = "black";

// const body = document.body; // we can select body element directly 

// We can use querySelector on any element to find its children.
const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
// console.log(title);

const container = document.querySelector(".container");
console.log(container);
console.log(container.children);


