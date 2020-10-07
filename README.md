# Pet-Shelter-API
This application built in Express in Node.js and provide three RESTful JSON API endpoints includes GetAllPets, GetPet by ID, Add New Pet.
Go to Command Prompt: Install npm – Node Package Manager
Install Node.js   
Be sure to restart your command line terminal. Now you should be able to run npm and node:
npm  --version
node --version
Let’s start by initializing project: npm init
Let’s just press “Enter” on every question to accept the defaults. This will create a file called package.json, which will include all of the project’s packages we need to run our API
Let’s install Express with npm:
npm install express body-parser morgan
We also need to install body-parser and morgan so that Express can accept JSON and provide logging
Let’s write some Javascript that will initialize and define our endpoints for GET, GET by ID and POST methods. 
We will plan for our URL endpoint to look like this:
GET ALL http://www.ourapi.com/pets    This will get all pets
GET     http://www.ourapi.com/pets/1    This will get pets information for pet 1
POST    http://www.ourapi.com/pets/add/new       This will create a new pet 
We can test our API  using the PostMan REST client 
