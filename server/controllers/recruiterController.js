module.exports = {
    createRecruiters: (req,res) => {
        const {recruiter_id,
            firstname,
            lastname,
            current_employer,
            previous_employers,
            years_experience,
            photo} = req.body,
            db = req.app.get('db');

            db.recruiters.add_recruiters(recruiter_id,
                firstname,
                lastname,
                current_employer,
                previous_employers,
                years_experience,
                photo)

    },
    getRecruiters: (req,res) => {
   
            const db = req.app.get('db');

        db.recruiters.get_recruiters()
        .then((data)=>{
            res.status(200).send(data)
        })

    },
    getCalendars: (req,res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.recruiters.get_calendars(id)
    },

}