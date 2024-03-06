const categuriesUl = document.querySelector('#categories');
console.log('Number of categories:', categuriesUl.children.length);
const itemsOfCateguriesUl = document.querySelectorAll('.item');
itemsOfCateguriesUl.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})
