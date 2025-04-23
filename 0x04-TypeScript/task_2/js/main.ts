// Define the interfaces for Director and Teacher
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create the employee function that returns either a Teacher or Director instance
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test the createEmployee function
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

// Type predicate function to verify if an employee is a Director
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test the executeWork function
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// Define a string literal type for Subjects
type Subjects = "Math" | "History";

// Implement the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

// Test the teachClass function
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
