//dotenv should be required at the top of the file.
require('dotenv').config();
//Below is some shorthand for variable declarations. If you have multiple 
//declarations of the same type in a row, simply separate them with comma's instead
//of multiple vars, lets, or const.
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      path = require('path'),
      authCtrl = require('./controllers/authController'),
    //   mainCtrl = require('./controllers/mainController'),
      recruiterCtrl = require('./controllers/recruiterController'),
      stripeCtrl = require('./controllers/stripeController'),
      userCtrl = require('./controllers/userController'),
      calendarCtrl =require('./controllers/calendarController'),
      feedbackCtrl=require('./controllers/feedbackController'),
    //   app = require('express')(),
    //   http = require('http').createServer(app),
    //   io = require('socket.io'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());
//Express-session is implemented as top-level-middleware, so that it will be 
//invoked before the handler function of any request.
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

//Recently massive updated, so passing a connection string is now done like below.
//Remember to NOT include ?ssl=true to your connection string in you .env.
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

//auth endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

//post endpoints
// app.post('/api/post', mainCtrl.createPost);
// app.get('/api/posts/:id', mainCtrl.getUserPosts);


//user endpoints
app.get('/api/users', userCtrl.getUsers);
app.put('/api/user/:id', userCtrl.updateUsername);
app.delete('/api/user/:id', userCtrl.deleteUser);

//recruiter endpoints
app.post('/api/recruiters', recruiterCtrl.createRecruiters);
app.get('/api/recruiters', recruiterCtrl.getRecruiters);

//calendar endpoint
app.get('/api/calendar', calendarCtrl.getCalendars);

//feedback endpoint
app.get('/api/feedback', feedbackCtrl.getFeedback);


//stripe endpoints
app.post('/api/payment', stripeCtrl.completePayments);

//hosting
app.use(express.static(__dirname +'/../build'))
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html' ))
})


app.listen(port, () => console.log(`Server running on port ${port}`));
