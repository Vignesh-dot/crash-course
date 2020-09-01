import { Person } from "./person";

export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
    console.log("Give Exam");
  }
  teach(x) {
    console.log(x);
  }
}
