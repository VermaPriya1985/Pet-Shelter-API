<b> Pet-Shelter-API </b>

<p>This application built in Express in Node.js and provide three RESTful JSON API endpoints includes GetAllPets, GetPet by ID, Add New Pet. 
<br/>Go to Command Prompt: 
<br/> Install npm – Node Package Manager 
<br/> Install Node.js    
<br/> Be sure to restart your command line terminal. Now you should be able to run npm and node:
<br/> npm  --version
<br/> node --version
<br/>Let’s start by initializing project: npm init
<br/>Let’s just press “Enter” on every question to accept the defaults. This will create a file called package.json, which will include all of the project’s packages we need to run our API
<br/>Let’s install Express with npm:
<br/>npm install express body-parser morgan
<br/>We also need to install body-parser and morgan so that Express can accept JSON and provide logging
<br/>Let’s write some Javascript that will initialize and define our endpoints for GET, GET by ID and POST methods. 
<br/>We will plan for our URL endpoint to look like this:
  <br/>GET ALL <b> http://www.ourapi.com/pets  </b> :  This will get all pets
  <br/>GET    <b>  http://www.ourapi.com/pets/1   </b> : This will get pets information for pet 1
  <br/>POST  <b>  http://www.ourapi.com/pets/add/new  </b> :     This will create a new pet 
<br/>We can test our API  using the PostMan REST client 
