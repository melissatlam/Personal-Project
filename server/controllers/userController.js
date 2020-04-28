module.exports = {
    
    getUsers: (req, res) => {
    const {id} = req.params,
          db = req.app.get('db');

    db.post.get_users(id)
    .then(posts => res.status(200).send(posts))
    .catch(err => res.status(500).send(err));
},

deleteUser: (req, res) => {
    const {id} = req.params,
          db = req.app.get('db');

    db.users.delete_user(id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
},
updateUsername: (req, res) => {
    const {id} = req.params,
          {username} = req.body,
          db = req.app.get('db');
    
    db.users.update_username(username, id)
    .then(user => res.status(200).send(user))
    .catch(err => console.log(err));
}

}