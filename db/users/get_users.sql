SELECT * 
FROM users
JOIN calendar ON users.user_id = calendar.user_id;