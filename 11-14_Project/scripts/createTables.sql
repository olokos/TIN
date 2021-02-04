drop database IF EXISTS dbapp;
create DATABASE dbapp;
use dbapp;
create TABLE student(
	studentID INT AUTO_INCREMENT PRIMARY KEY,
	studentFirstName varchar(255) NOT NULL,
	studentLastName varchar(255) NOT NULL,
	studentCreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);
create TABLE university(
	universityID INT AUTO_INCREMENT PRIMARY KEY,
	universityName varchar(255) NOT NULL,
	universityEstablishedAt TIMESTAMP NOT NULL
	);
create TABLE studentStudyingAtUni(
	whichStudentID INT NOT NULL,
	whichUniversityID INT NOT NULL,
	startedStudyingAt TIMESTAMP NOT NULL,
	whatSubject varchar(255),
	FOREIGN KEY(whichStudentID) REFERENCES student(studentID),
	FOREIGN KEY(whichUniversityID) REFERENCES university(universityID)
	);
	