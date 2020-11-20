function Student(studentID, firstName, lastName, gradesArray) {
this.studentID = studentID;
this.firstName = firstName;
this.lastName = lastName;
this.gradesArray = gradesArray;
this.name = function () {return this.firstName + ' ' + this.lastName;}
        this.gradeAverage = function () {
            let gradesCount = 0;
            let gradesSum = 0;
            for(let i=0;i<this.gradesArray.length;i++) {
                gradesCount = gradesCount + 1;
                gradesSum = gradesSum + this.gradesArray[i];
            }
            let gradesAverage = gradesSum / gradesCount;
            return gradesAverage;
        }
    }
let whatever=new Student(1,'Aleksander','Kos',[1,2,3,4,5]);
console.log(whatever.name() + ' ' + whatever.gradeAverage());