let button = document.getElementById("check")
button.addEventListener("click", function () {
<<<<<<< HEAD
=======

>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
    let planet = document.getElementById("redplanet")

    planet.innerText = "Alien invasion"
    planet.classList.add("alert")
    // planet.style.color = "red"
<<<<<<< HEAD
    // planet.style.fontWeight = "bold"
    // planet.remove()
})
document.getElementById("reset")
    .addEventListener("click", function () {
        let planet = document.getElementById("redplanet")
=======
    // planet.remove()
    // planet.style.fontWeight = "bold"
})

document.getElementById("reset")
    .addEventListener("click", function () {
        let planet = document.getElementById("redplanet")

>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
        planet.innerText = "Nothing to report"
        planet.classList.remove("alert")
    })

<<<<<<< HEAD
document.getElementById("greenplanet")
    .addEventListener("click", function () {
        document.getElementById("greenplanet").classList.add("alert")
    })
=======

document.getElementById("greenplanet")
.addEventListener("click", function () {
    let planet = document.getElementById("greenplanet")
    planet.classList.add("alert")
})
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
