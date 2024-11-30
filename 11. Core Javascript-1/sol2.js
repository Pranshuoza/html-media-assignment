function gradeStudent(marks) {
    let grade;

    if (marks > 90) {
        grade = 'A';
    } else if (marks > 70 && marks <= 90) {
        grade = 'B';
    } else if (marks > 50 && marks <= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    return grade;
}

const studentMarks = 90;
console.log("The grade for the student is: " + gradeStudent(studentMarks));
