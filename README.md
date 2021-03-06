# Blog-Api (SkyLine API)

## Project Description

The Blog-API project is a full CRUD operation back-end project. The project utilizes NodeJS, Express, Mongoose, and MongoDB.
My specific blog allows the user to login and create their own skyscraper. The user can enter the skyscraper's name, height
in feet and or meters and a location. Users must also create login information. 

## Technologies Used
- NodeJS
- Express
- Mongoose
- MongoDB

## Authorization

Users must create a login credentials. This consists of a username, email, and they must create a password.
The user must provide a valid email address and they must create a valid password. If the user enters the
wrong credentials they'll be prompted to enter the correct email and password. 

## Encryption

When a user profile is created, a token is created and the password is hashed and encrypted using
the bcrpyt dependency. The token is used on the backend to get the user's information. 

## Skyscraper Routes

Using the full CRUD operation, there is a Create, Read, Update, and Delete route.

Routes
1. Create Route - I created a POST route in Postman called Create Skyscraper.
                  This allows the user to create a skyscraper object.

2. Read Route - I created a GET route in Postman called Get Skyscraper.
                This route will display all the skyscrapers that were created.

3. Update Route - I created a PUT route in Postman called Update Skyscraper.
                 The PUT route allows the user to update a key value of the
                 skyscraper. 

4. Delete Route - I created a DELETE route in Postman called Delete Skyscraper
                 This allows the users the user to delete their skyscraper by
                 taking the "id" generated by the POST route and pasting that
                 "id" in the URL in order to delet the skyscraper.

## User Routes

I created 2 routes for the user. A POST route and a GET route.

Routes: 
1. Create Route - I created a POST route in Postman called Create User
                  This route allows users to enter a username, email, and passord.

2. Read Route - I created a GET route in Postman called Get User
                This route displays all the users created.

## Auth Route

I created a Login route which is a POST route in Postman. This route lets users login with their credentials.
If their credentials are incorrect they will receive an error message and will be prompted to provide the
correct information.

## Heroku Link
https://ama-skyline-api.herokuapp.com
