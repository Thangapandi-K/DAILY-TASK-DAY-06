
// Calculating Uber Ride Price

class UberPrice {

    constructor(baseFare, costPerKM, distance, costPerMin, duration) {

        this.baseFare = baseFare;
        this.costPerKM = costPerKM;
        this.distance = distance;
        this.costPerMin = costPerMin;
        this.duration = duration;
    
    }

    totalPrice() {

    return this.baseFare + (this.costPerKM * this.distance) + (this.costPerMin * this.duration);

    }

}

const uberRideCost = new UberPrice (100, 15, 80, 3, 30); // (baseFare, costPerKM, distance, costPerMin, duration)

console.log(uberRideCost.totalPrice()); // output => 1390


