var express =  require('express');
var cors = require('cors');
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');

const app = express();
app.use(cors());
app.locals.moment = require('moment');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.use(ejsLayouts);

app.set('port', (process.env.PORT || 8080));


// INDEX PAGE
app.get('/', function(req, res) {
  var expenses = [
    {
      "id": 1,
      "title": "Travel",
      "desc": "Award Trip",
      "amount": 100000,
      "status": "Approved",
      "Department": "Programming",
      "Type": "External",
      "Category": "Travels",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-11T21:33:15.183Z",
      "updatedAt": "2020-03-12T15:07:50.769Z",
  },
  {
      "id": 17,
      "title": "lkhf",
      "desc": "kjdvh",
      "amount": 98,
      "status": "Approved",
      "Department": "Accounts",
      "Type": "Internal",
      "Category": "Transportation",
      "Employee": "Samuel Adelugba",
      "createdAt": "2020-03-16T18:00:15.212Z",
      "updatedAt": "2020-03-16T18:00:15.212Z"
  },
  {
      "id": 3,
      "title": "Test",
      "desc": "Test",
      "amount": 600,
      "status": "Approved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Transportation",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-12T01:09:43.213Z",
      "updatedAt": "2020-03-16T02:11:44.197Z"
  },
  {
      "id": 7,
      "title": "testst",
      "desc": "dtsjs",
      "amount": 1819,
      "status": "Disapproved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Travels",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-15T13:30:12.090Z",
      "updatedAt": "2020-03-16T02:03:09.070Z"
  },
  {
      "id": 24,
      "title": "Greetings",
      "desc": "greetings to all",
      "amount": 1200,
      "status": "Approved",
      "Department": "Accounts",
      "Type": "Internal",
      "Category": "Logistics",
      "Employee": "Jide Babs",
      "createdAt": "2020-06-05T14:13:52.669Z",
      "updatedAt": "2020-06-05T14:14:15.504Z"
  },
  {
      "id": 2,
      "title": "Data Usage",
      "desc": "Data for work",
      "amount": 900,
      "status": "Approved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Development",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-11T21:34:33.726Z",
      "updatedAt": "2020-03-11T21:34:33.726Z"
  },
];
res.render('pages/expense_list', { title: 'Dashboard', expenses: expenses, layout: 'layouts/detail'} );
});

// GET ONE AUTHOR
app.get('/blog/author/:author_id', function(req, res, next) {
        // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
        // dummy author response - no need to call database
        var author = {"id": 1,"first_name":"Bob","last_name":"Smith","email":"bob@gmail.com"};
        // change id = 2 and test for when :author_id
        res.render('pages/author_detail', { title: 'Author Details', author: author, layout: 'layouts/detail'} );
});

// GET ALL AUTHORS
app.get('/blog/authors', function(req, res) {
          // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
         // dummy authors response - no need to call database
         var authors = [
           {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
          {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
          {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}];
        res.render('pages/author_list', { title: 'Author List', authors: authors, layout: 'layouts/detail'} );
});

// GET ONE AUTHOR
app.get('/expense/:expense_id', function(req, res, next) {
  // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
  // dummy author response - no need to call database
  var expense = {
    "id": 1,
    "title": "Travel",
    "desc": "Award Trip",
    "amount": 100000,
    "status": "Approved",
    "Department": "Programming",
    "Type": "External",
    "Category": "Travels",
    "Employee": "Sarah MB",
    "createdAt": "2020-03-11T21:33:15.183Z",
    "updatedAt": "2020-03-12T15:07:50.769Z",
};
  // change id = 2 and test for when :author_id
  res.render('pages/expense_detail', { title: 'Expense Details', expense: expense, layout: 'layouts/detail'} );
});

// GET ALL AUTHORS
app.get('/expenses', function(req, res) {
    // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
   // dummy authors response - no need to call database
   var expenses = [
    {
      "id": 1,
      "title": "Travel",
      "desc": "Award Trip",
      "amount": 100000,
      "status": "Approved",
      "Department": "Programming",
      "Type": "External",
      "Category": "Travels",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-11T21:33:15.183Z",
      "updatedAt": "2020-03-12T15:07:50.769Z",
  },
  {
      "id": 17,
      "title": "lkhf",
      "desc": "kjdvh",
      "amount": 98,
      "status": "Approved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Transportation",
      "Employee": "Samuel Adelugba",
      "createdAt": "2020-03-16T18:00:15.212Z",
      "updatedAt": "2020-03-16T18:00:15.212Z"
  },
  {
      "id": 3,
      "title": "Test",
      "desc": "Test",
      "amount": 600,
      "status": "Approved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Transportation",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-12T01:09:43.213Z",
      "updatedAt": "2020-03-16T02:11:44.197Z"
  },
  {
      "id": 7,
      "title": "testst",
      "desc": "dtsjs",
      "amount": 1819,
      "status": "Disapproved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Travels",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-15T13:30:12.090Z",
      "updatedAt": "2020-03-16T02:03:09.070Z"
  },
  {
      "id": 24,
      "title": "Greetings",
      "desc": "greetings to all",
      "amount": 1200,
      "status": "Approved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Logistics",
      "Employee": "Jide Babs",
      "createdAt": "2020-06-05T14:13:52.669Z",
      "updatedAt": "2020-06-05T14:14:15.504Z"
  },
  {
      "id": 2,
      "title": "Data Usage",
      "desc": "Data for work",
      "amount": 900,
      "status": "Approved",
      "Department": "Programming",
      "Type": "Internal",
      "Category": "Development",
      "Employee": "Sarah MB",
      "createdAt": "2020-03-11T21:34:33.726Z",
      "updatedAt": "2020-03-11T21:34:33.726Z"
  },
];
  res.render('pages/expense_list', { title: 'Expense List', expenses: expenses, layout: 'layouts/detail'} );
});
 

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});