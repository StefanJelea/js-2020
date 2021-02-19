let dacia = {
    make: "Dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    averageConsumption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150,
<<<<<<< HEAD
    paint(color) {
        this.color = color
    },
    move(distance) {
=======
    paint: function (color) {
        this.color = color
    },
    move: function (distance) {
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
        consumption = this.averageConsumption * distance / 100
        if (consumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else {
            this.batteryCharge -= consumption
            this.mileage += distance
        }
<<<<<<< HEAD
    },
    recharge() {
        this.batteryCharge = this.batteryCapacity
    },
    distanceToEmpty() {
        return 100 * this.batteryCharge / this.averageConsumption
    }
=======

    },
    recharge: function () {
        this.batteryCharge = this.batteryCapacity
    },
    distanceToEmpty: function () {
        return 100 * this.batteryCharge / this.averageConsumption
    },
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
}
let ferrari = {
    make: "Ferrari",
    model: "Dino",
    color: "rosu",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    paint: function (color) {
        this.color = color
    }
}
dacia.paint("galben")
dacia.move(100)
<<<<<<< HEAD
console.log(Math.round(dacia.distanceToEmpty()))
dacia.move(100)
console.log(dacia.distanceToEmpty())
=======
console.log(Math.round(dacia.distanceToEmpty()) , 'distance to empty')
dacia.move(100)
console.log(dacia.distanceToEmpty(), 'distance to empty 2')
>>>>>>> f62828c58f8c7aa63780b7cc331471e7ab3b73fb
console.log(dacia)
console.log(ferrari)


