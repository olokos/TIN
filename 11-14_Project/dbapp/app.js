var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resultRouter = require('./routes/result_page');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/result_page', resultRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("Initiating connection to MySQL!");

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbapp'
})

connection.connect()
console.log('MySQL Connection Established!');

function selectFromStudent(){
  connection.query('SELECT * FROM student', function (err, result) {
    if (err) throw err;
    
      for(var i=0;i<result.length;i++){
        console.log(result[i].studentFirstName + ' ' + result[i].studentLastName);
      }
})};
function selectFromUniversity(){
  connection.query('SELECT * FROM university', function (err, result) {
    if (err) throw err;
    
      for(var i=0;i<result.length;i++){
        console.log(result[i].universityName + ' ' + result[i].universityEstablishedAt);
      }
})};
function selectFromstudentStudyingAtUni(){
  connection.query('SELECT * FROM studentStudyingAtUni', function (err, result) {
    if (err) throw err;
    
      for(var i=0;i<result.length;i++){
        console.log(result[i].whichStudentID + ' ' + result[i].whichUniversityID + ' ' + result[i].startedStudyingAt + ' ' + result[i].whatSubject);
      }
})};

function selectFromTable(tableName){
  connection.query('SELECT * FROM ' + tableName, function (err, result, fields) {
    if (err) throw err
    
  console.log(result);
  
})};

function deleteFromTable(tableName, whereCondition){
  connection.query('DELETE FROM ' + tableName + ' WHERE ' + whereCondition, function (err, result, fields) {
    if (err) throw err
    
  console.log('Deleted Row(s): ', result.affectedRows);
  
})};

function insertIntoStudent(){
  var sql='INSERT INTO student(studentFirstName, studentLastName) VALUES ?';
  var values = [
    ['Testowy', 'Student'],
    ['Kolejny','TestowyStudent']
  ];
  connection.query(sql, [values], function (err, result, fields) {
    if (err) throw err
    
  console.log('Inserted Row(s): ', result.affectedRows);
  
})};

function insertIntoUniversity(){
  var sql='INSERT INTO university(universityName, universityEstablishedAt) VALUES ?';
  var values = [
    ['SAMP', '2020-01-11 15:00:01'],
    ['TESTUNI','2021-01-11 15:00:01']
  ];
  connection.query(sql, [values], function (err, result, fields) {
    if (err) throw err
    
  console.log('Inserted Row(s): ', result.affectedRows);
  
})};

function insertIntostudentStudyingAtUni(){
  var sql='INSERT INTO studentStudyingAtUni(whichStudentID, whichUniversityID, startedStudyingAt, whatSubject) VALUES ?';
  var values = [
    [5,3, '2020-01-11 15:00:01', 'Algebra'],
    [2,2, '2010-01-11 15:00:01', 'Physics']
  ];
  connection.query(sql, [values], function (err, result, fields) {
    if (err) throw err
    
  console.log('Inserted Row(s): ', result.affectedRows);
  
})};

function updateStudent(data){
  var sql='UPDATE student SET studentFirstName = ?, studentLastName = ? WHERE studentID = ?';
  connection.query(sql, data, function (err, result, fields) {
    if (err) throw err
    
  console.log('Updated Row(s): ', result.affectedRows);
  
})};

function updateUniversity(data){
  var sql='UPDATE university SET universityName = ?, universityEstablishedAt = ? WHERE universityID = ?';
  connection.query(sql, data, function (err, result, fields) {
    if (err) throw err
    
  console.log('Updated Row(s): ', result.affectedRows);
  
})};

function updateStudentStudyingAtUni(data){
  var sql='UPDATE studentStudyingAtUni SET whichStudentID = ?, whichUniversityID = ?, startedStudyingAt = ?, whatSubject = ? WHERE whichStudentID = ? AND whichUniversityID = ?';
  connection.query(sql, data, function (err, result, fields) {
    if (err) throw err
    
  console.log('Updated Row(s): ', result.affectedRows);
  
})};

//selectFromTable('student');
//selectFromTable('university');
//selectFromTable('studentStudyingAtUni');

selectFromStudent();
//selectFromUniversity();
//selectFromstudentStudyingAtUni();


//deleteFromTable('student','studentFirstName="Andrzej"');
//insertIntoStudent();
//insertIntoUniversity();
//insertIntostudentStudyingAtUni();
//selectFromstudentStudyingAtUni;

//var dataStudent = ['Eustachy', 'Motyka',4]
//updateStudent(dataStudent);
//var dataUniversity=['Update', '2020-01-11 15:00:01',2];
//updateUniversity(dataUniversity);
//var dataStudentStudyingAtUni=[3,4,'2020-01-11 15:00:01','Chinese',3,4];
//updateStudentStudyingAtUni(dataStudentStudyingAtUni);
connection.end()

app.listen(8080);
console.log("App listening at port 8080!")

var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // to support JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies


app.post('/result_page', function(req, res) {
  res.render('result_page', {title: "Your data presented in EJS!", operation: req.body.operation, tableToOperateOn: req.body.tableToOperateOn});
});

app.get('/result_page',function (req,res){
  let operation = res.write(req.body.operation);
  let tableToOperateOn = res.write(req.body.tableToOperateOn);
  res.send (operation + tableToOperateOn);
  res.end();
});
module.exports = app;
