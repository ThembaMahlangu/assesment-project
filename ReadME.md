# This is a ReactJS project which follows the guidelines of the coding assessment

Please Note that this project is divided into two
1. Server - An external nodejs express server that allows for authentication and saving data in the MongoDB Database
2. Client - This is the frontend part of the project which in essence is the UI of our app

# Intructions For Starting Project 

# Client Folder
1. run "npm i"/"npm install" to install the neccesary dependencies of the project
2. Change the name of the file ".env-example" to ".env" so as to load the dotenv
3. Start the project by running "npm run dev" which will open a localserver on port 3000
4. Open "localhost:3000" on your browser then once it opens, click on sign up to create an account so that you can access the app's dashboard
5. Simply login again if you want to access the app

# Server Folder
1. run "npm i"/"npm install" to install the neccesary dependencies of the server
2. Change the name of the file ".env-example" to ".env" and then make sure you fill out the MONGO_URI link so that you can connect to your database
3. Start the server by running "npm run server" || "npm start" then it will start the server with 2 logged messages about the port and the database connection 
MAKE SURE YOU THE ENV FILE FROM CLIENT HAS THE CORRECT ENDPOINT ON NEXT_PUBLIC_BASE_URL, SO ITS BEST IF YOU RUN THE SERVER FIRST

# Additions To The Project
1. TailwindCSS - I used tailwindcss for styling the project
2. MongoDB - I used MongoDB as the database for the project
3. Mongoose - I used mongoose as the ODM for the project
4. Authentication - I used JWT for authentication and protecting routes
5. TOM API - I used the TOM API to get the data for the project
6. Storing TOM API Data - I added the functionality to save the data from the TOM API to the database so that the user can access it even when the TOM API is down

# Technologies Used
1. ReactJS(NextJS)
2. NodeJS(Express)
3. MongoDB
4. TailwindCSS
5. Mongoose
6. Axios
7. TOM API

# Project Structure

# Client Folder
1. components - This folder contains all the components that are used in the project
2. pages - This folder contains all the pages that are used in the project
3. public - This folder contains all the static files that are used in the project
4. styles - This folder contains all the styles that are used in the project
5. utils - This folder contains all the utility functions that are used in the project

# Server Folder
1. middleware - This folder contains all the middleware functions that are used in the project
2. models - This folder contains all the models that are used in the project
3. routes - This folder contains all the routes that are used in the project
5. server.js - This file contains the server setup with its mounted routes and the database connection

# I hope you enjoy the project and I look forward to hearing from you soon