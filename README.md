Backend rest api for patients
Frontend react typescript app

for the test i am using mongo atalas 
i opened network to every one,
if there issue with mongo wuth network, i might have need to add to whitelist your ips
but should work

backend isntructions

1. cd backend
2. npm install
3. npm start

1. cd Frontend
2. npm install
3. npm start


The first thing that I did was to understand the data,
Once understand the data, and arrange it in process the rest was very clear

I grab the 2 documents and search for a connection, i understand that in one place, there is patient's list
And in other lab result but  what was missing for me is the connection --> patient_id

create infrastucture, 
i start with redis and web socket but than its become complicated to excericxe i was missing the boradcasing and authentication so i start and return to base 

choose to work with mongodb atlas,
react ano node beacuse its the same langauge for front and backend :)

can share packages.

In the backend, there is a script folder that I use for the ETL process to build the structure of data.
After etl process, create me combined.json data i insert it into MongoDB Atlas. Start to create the schemas and interfaces for the application.

tried to do best pracitce

working time: 2 days total could ne done faster


