SELECT * 
FROM recruiters
FULL JOIN recruiter_calendars ON recruiters.recruiter_id = recruiter_calendars.recruiter_id;