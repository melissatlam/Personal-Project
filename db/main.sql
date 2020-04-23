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

create table recruiters {
    user_id serial primary key,
    firstname varchar(50),
    lastname varchar(50),
    current_employer varchar(50),
    previous_employers varchar(50),
    years_experience integer,
    rate integer,

}

create table recruiter calendars {
    user_id serial primary key,
    day_available date,
    time_available time
    -- recruiter_id
    -- user_id
}

create table transactions {
    
}