module.exports = {
    getCalendars: (req,res) => {
    const {id} = req.params,
          db = req.app.get('db');

    db.calendars.get_calendars(id)
}
}