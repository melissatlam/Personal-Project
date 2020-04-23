//bcrypt is used for hashing passwords, so you can safely store a user password in
//your database.
const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        //setting up you need for the function
        const {username, email, password, picture} = req.body,
              db = req.app.get('db');

        //check if user with given email exists in db, prevent duplicate accounts
        const foundUser = await db.users.check_user(email);
        if(foundUser[0]){
            return res.status(400).send('Email already in use')
        }

        //hash password, create the user
        let salt = bcrypt.genSaltSync(10);
        console.log(salt); //shows the unique string attached to password
        let hash = bcrypt.hashSync(password, salt); //hashsync = mix the pw and salt, can't reverse engineer the hash
        const newUser = await db.users.register_user(username, email, hash, picture);

        //place the user on a session, send that client-side
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },
    login: async(req, res) => {
        //setting up what you need for the function
        const {email, password} = req.body,
              db = req.app.get('db');

        //check if user with given email exists db
        let foundUser = await db.users.check_user(email);
        if(!foundUser[0]){
            return res.status(400).send('Email does not exist');
        }

        //check password against the hash in the db
        const authenticated = bcrypt.compareSync(password, foundUser[0].password); //foundUser[0].password bcrypt 
        if(!authenticated){
            return res.status(401).send('Password is incorrect');
        }

        //CHANGE PW = const authenticated = bcrypt.compareSync(password, foundUser[0].password); 
        // let salt = bcrypt.genSaltSync(10);
        // console.log(salt); //shows the unique string attached to password
        // let hash = bcrypt.hashSync(password, salt); //hashsync = mix the pw and salt, can't reverse engineer the hash
        //THEN update table

        //place user on a session, send session client-side
        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        //logout will clear out the session object of user data.
        req.session.destroy();
        res.sendStatus(200);
    }
}