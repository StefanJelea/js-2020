let bubbles = [60, 59, 48, 71, 45, 51, 65, 70, 49, 38]

<<<<<<< HEAD
let fruits = ["ananas", "mango", "orange", "tomato", "cucumber"]
=======
let fruits = ["Apple", "Ananas", "Mango", "Orange", "Cucumber", "Tomato"]
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb

bubbles.sort()
max = bubbles.pop()

<<<<<<< HEAD
fruits.sort()
fruits.reverse()

bubbles[0]
fruits[2]
=======

fruits.sort()
fruits.reverse()

>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb

console.log(max)
console.log(fruits)

<<<<<<< HEAD
=======

>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
<<<<<<< HEAD
}

=======

}


>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
for (const fruit of fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}
<<<<<<< HEAD

=======
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
fruits.forEach(fruit => {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
<<<<<<< HEAD
})

=======
});
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
for (const fruit in fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}