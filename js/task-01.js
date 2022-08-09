const categoriesList = document.querySelector('#categories')
const categoriesItems = document.querySelectorAll('.item')


console.log(`Number of categories: ${categoriesItems.length}`)

const list = categoriesList.children


for (let i = 0; i < list.length; i++){
    const title = document.querySelectorAll('h2')
    const items = title[i].nextElementSibling
    const itemsCount = items.children
    console.log(`Category: ${title[i].textContent} 
Elements: ${itemsCount.length}`)
}




