
// Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, course, batch, mobile, email, city, state) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
        this.batch = batch;
        this.mobile = mobile;
        this.email = email;
        this.city = city;
        this.state = state;
    }

    getPersonalDetail() { 
        return `name : ${this.firstName} ${this.lastName}
        age : ${this.age}
        mobile : ${this.mobile}
        mail : ${this.mail}
        city : ${this.city}
        state : ${this.state}`
    }

    getCandidateDetails() { 
        return `name : ${this.firstName} ${this.lastName}
        age : ${this.age}
        course : ${this.course}
        batch : ${this.batch}`
    }
}

const person1 = new Person ("Thangapandi", "K", 27, "MERN Full Stack Development", "FSD59WD-T", "+919952257347", "thangapandi.chella@gmail.com", "Theni", "Tamilnadu")


console.log(person1);

console.log(person1.getPersonalDetail());

console.log(person1.getCandidateDetails());
