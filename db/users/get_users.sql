SELECT * 
FROM users
full JOIN calendar ON users.user_id = calendar.user_id;