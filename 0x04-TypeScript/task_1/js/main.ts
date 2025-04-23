// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding any additional attribute
}

// Example usage of Teacher interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Directors interface
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test printTeacher function
console.log(printTeacher("John", "Doe")); // J. Doe

// Interface for StudentClass constructor
interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

// Interface for StudentClass methods
interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

// Implement StudentClass with the required methods
class StudentClass implements StudentClassMethods {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassInterface) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test StudentClass
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
