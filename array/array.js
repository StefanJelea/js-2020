let bubbles = [60, 59, 48, 71, 45, 51, 65, 70, 49, 38]

let fruits = ["Apple", "Ananas", "Mango", "Orange", "Cucumber", "Tomato"]

bubbles.sort()
max = bubbles.pop()


fruits.sort()
fruits.reverse()


console.log(max)
console.log(fruits)


for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)

}


for (const fruit of fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}
fruits.forEach(fruit => {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
});
for (const fruit in fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}