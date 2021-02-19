document.querySelector("div")
<<<<<<< HEAD
        .addEventListener("click", () => document.querySelector("div").classList.add("disappear")
        )

document.querySelector("div")
        .addEventListener("animationend", () =>
            document.querySelector("div").classList.remove("disappear"))
=======
    .addEventListener("click", function () {
        document.querySelector("div")
            .classList.add("disappear")
    })

    document.querySelector("div")
    .addEventListener("animationend", function () {
        document.querySelector("div").classList.remove("disappear")
    })
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
