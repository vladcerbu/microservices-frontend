***

System Oriented Architecture  
**Babes-Bolyai University**  
Cerbu-Sfarghiu Vlad

***

# Purpose

This is an experiment in which I built a functional e-commerce type application (an online book shop) using micro frontends.

## Installation

From the root folder, run the following commands:

    cd cart     --> npm install   --> cd ..
    cd products --> npm install   --> cd ..
    cd shopping --> npm install   --> cd ..
    cd cart     --> npm run build --> npm run start --> cd ..
    cd products --> npm run build --> npm run start --> cd ..
    cd shopping --> npm run build --> npm run start --> cd ..

Now, everything should be set up for the frontend. You can check out the backend part of the application [here](https://github.com/vladcerbu/microservices-backend).

You can also use docker images using the command `docker-compose up` from the root folder if you have docker installed.

Opening the browser with [http://localhost:3000](http://localhost:3000), you should be able to open the Application.

The micro frontends can also be checked here:

For the Cart micro frontend: [http://localhost:3001](http://localhost:3001)

For the Products micro frontend: [http://localhost:3002](http://localhost:3002)

## Description

The frontend part of the application consists of 3 micro-frontends done using ReactJS, one of which is the host (shopping) that loads the other micro-frontends through the use of webpack.

The Products micro-frontend represents the main page of the application where the list with all the products will be shown. Also it contains a button which loads the cart micro-frontend.

The Cart micro-frontend contains a list that displays the products in the cart and a form used for submitting the order to a specified email address.