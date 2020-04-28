create table if not exists users (
    user_id serial primary key,
    username varchar(20),
    email varchar(100),
    password varchar(100),
    profile_picture text
);

create table if not exists post (
    post_id serial primary key,
    user_id int references users(user_id),
    post_url text
);

create table recruiters (
    recruiter_id serial primary key,
    firstname varchar(50),
    lastname varchar(50),
    current_employer varchar(50),
    previous_employers varchar(50),
    years_experience integer,
    rate varchar(10),
    photo varchar(100)

)

create table recruiter_calendars (
    recruiter_calendar_id serial primary key,
    day_available date,
    time_available time,
    recruiter_id integer references recruiters(recruiter_id), 
    -- users integer references users(user_id)
)




-- ALTER TABLE recruiter_calendars ADD FOREIGN KEY (recruiter_id) REFERENCES recruiters(recruiter_id)
-- ALTER TABLE recruiter_calendars ADD FOREIGN KEY (user_id) REFERENCES users(user_id)


-- update recruiters set photo = 'https://vignette.wikia.nocookie.net/sonic-pokemon-unipedia/images/1/11/9-1.png/revision/latest?cb=20131031034908' where recruiter_id = 6;