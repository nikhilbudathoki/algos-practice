/*
This file will be practice for ES2015 class syntax
*/
class Student {
        constructor(firstName, lastName, year) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.grade = year;
                this.tardies = 0;
                this.scores = [];
        }
        /* Instance methods: methods that provide 
           functionality for a single instance */
        fullName() {
                return `Your full name is ${this.firstName} ${this.lastName}`;
        }

        markLate() {
                this.tardies += 1;
                return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
        }
        addScore(score) {
                this.scores.push(score);
                return this.scores;
        }
}

let ballonDor = new Student("Luka", "Modric", "2019");

console.log(ballonDor.markLate());

