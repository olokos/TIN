function Student(studentID, firstName, lastName, gradesArray) {
    this.studentID = studentID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradesArray = gradesArray;
    this.name = function () {return this.firstName + ' ' + this.lastName;}
            this.calculateGradeAverage = function () {
                let gradesCount = 0;
                let gradesSum = 0;
                for(let i=0;i<this.gradesArray.length;i++) {
                    gradesCount = gradesCount + 1;
                    gradesSum = gradesSum + this.gradesArray[i];
                }
                let gradesAverage = gradesSum / gradesCount;
                return gradesAverage;
            }
            Object.defineProperty(this, "gradeAverage",{
                get: function(){return this.calculateGradeAverage();}
            });
            Object.defineProperty(this, "fullName",{
                get: function(){return this.firstName + ' ' + this.lastName;
            },
            set: function(nameString){
                nameString=nameString.split(' ');
                this.firstName=nameString[0];
                this.lastName=nameString[1];}
            });
        }
    let whatever=new Student(1,'Aleksander','Kos',[1,2,3,4,5]);
    console.log(whatever.name() + ' ' + whatever.gradeAverage);
    console.log(whatever.fullName);
    whatever.fullName=('Jan Kowalski');
    console.log(whatever.fullName);
    console.log(whatever.firstName);
    console.log(whatever.lastName);