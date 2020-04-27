insert into recruiters (
    firstname,
    lastname,
    current_employer,
    previous_employers,
    years_experience,
    rate,
    photo


values 
('Melissa ', 'L', 'Toyota', 'Google & Oracle', 7, '$20/hr', 'https://i.pinimg.com/originals/4d/88/eb/4d88ebc2b8b3a26b8d698ff189f340b3.png'),
('Jeremy ', 'L', 'Apple', 'Microsoft & Samsung', 12, '$25/hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-FzRTgKbRRCuzEHyOERWX3uZo8VAe1qeesl2_PmXPsEizLGvc&usqp=CAU'),
('Chin ', 'K', 'Facebook', 'Salesforce', 15, '$25/hr','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrXgR8uv5a7U-ZdYXx3NSDCxNl6k4TY2Cp-v4CYGqW0OIPKbFN&usqp=CAU'),
('Daniel ', 'R', 'AT&T', 'Netflix', 3, '$15/hr','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6xSfx7BeiFU0ClyTGBcV_-CzXM6QGvxkUwVNiM22-mq-Lg12N&usqp=CAU'),
('Kayleigh ', 'F', 'Texas Instrument', 'Intel', 5, '$15/hr','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZJV30Uky3l37zz4bPVKne4MyykEIZLeg_MIH3Twv6UGOsmugN&usqp=CAU'),
('Eric ', 'S', 'Amazon', 'Adobe & Dell', 7, '$21/hr','https://vignette.wikia.nocookie.net/sonic-pokemon-unipedia/images/1/11/9-1.png/revision/latest?cb=20131031034908'),
('Aaron ', 'M', 'IBM', 'SAP & eBay', 7, '$22/hr','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTDqbtBIxnOAsr8dpEHPpUg3OudqB_F9mCLW7wIKh-Yy_-36ol&usqp=CAU'),



returning firstname, lastname, current_employer, previous_employers, years_experience, rate, photo;

