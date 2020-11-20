
    let studentID = 1337,
        firstName = 'Aleksander',
        lastName = 'Kos';
    let student = {
        studentID,
        firstName,
        lastName,
        getGrades() {},
        setGrades() {},
        doHomework() {}
    };

    function printStudentDataAndTypes(studentObject) {
        console.log(studentObject.studentID + ' ' + typeof(studentObject.studentID));
        console.log(studentObject.firstName + ' ' + typeof(studentObject.firstName));
        console.log(studentObject.lastName + ' ' + typeof(studentObject.lastName));
    }
    printStudentDataAndTypes(student);