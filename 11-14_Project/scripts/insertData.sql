use dbapp;
INSERT INTO student(studentFirstName, studentLastName) values ('Andrzej', 'Kubal');
INSERT INTO student(studentFirstName, studentLastName) values ('Felicja', 'Michal');
INSERT INTO student(studentFirstName, studentLastName) values ('Janusz', 'Andrzejewski');
INSERT INTO student(studentFirstName, studentLastName) values ('Klaudia', 'Mistral');
INSERT INTO student(studentFirstName, studentLastName) values ('Mateusz', 'Lukaszenko');
INSERT INTO student(studentFirstName, studentLastName) values ('Michael', 'Nawalny');

INSERT INTO university(universityName, universityEstablishedAt) values('Polsko Japonska Akademia Technik Komputerowych', '1994-01-01 00:00:01');
INSERT INTO university(universityName, universityEstablishedAt) values('Uniwersytet SWPS', '1996-01-01 00:00:01');
INSERT INTO university(universityName, universityEstablishedAt) values('Uczelnia Lazarskiego', '1993-01-01 00:00:01');
INSERT INTO university(universityName, universityEstablishedAt) values('Warszawska Wyzsza Szkola Informatyki', '2000-07-19 00:00:01');

INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(1,1,'2020-01-11 15:00:01', 'IT in English');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(2,2,'2019-11-01 19:50:01', 'New Media');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(3,3,'2018-12-21 15:40:01', 'Mathemathics');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(3,1,'2017-03-30 15:32:01', 'Accounting');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(3,4,'2016-02-29 15:22:01', 'Artificial Intelligence');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(4,4,'2015-01-04 15:16:01', 'English Language');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(4,3,'2014-11-13 15:17:01', 'Biology');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(4,2,'2013-08-14 15:54:01', 'Chemistry');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(5,2,'2012-07-17 15:12:01', 'Physical Education');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(6,3,'2011-06-06 15:32:01', 'Arts');
INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) values(6,4,'2010-05-21 15:43:01', 'Law');