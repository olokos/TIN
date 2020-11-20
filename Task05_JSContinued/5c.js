studentPrototype = {
    studentID:'',
    firstName:'',
    lastName:'',
    coursesArray :["English","Maths","Graphics"]
};


function createStudent(studentID, firstName, lastName){
    let newStudent = Object.create(studentPrototype);
    newStudent.studentID=studentID;
    newStudent.firstName=firstName;
    newStudent.lastName=lastName;
    newStudent.prototype=studentPrototype;
    return newStudent;
}
let student1 = new createStudent(1,'Aleksander', 'Kos');
console.log(student1);
console.log(student1.coursesArray);