module.exports ={
    getFeedback: (req,res) => {
   
        const db = req.app.get('db');

    db.feedback.get_feedback()
    .then((data)=>{
        res.status(200).send(data)
    })

} 
}