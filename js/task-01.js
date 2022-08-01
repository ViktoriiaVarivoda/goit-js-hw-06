const categories = document.querySelector('#categories');
const children = categories.children;
const amount = children.length;
console.log("Number of categories:", amount);

const item = Array.from(children);
for (let elem of item) {
    let category = elem.firstElementChild.textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(
    `Category: ${category}
Elements: ${quantityElem} `);
}
