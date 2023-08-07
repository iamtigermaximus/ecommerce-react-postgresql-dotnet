![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-brown)
![.NET Core](https://img.shields.io/badge/.NET%20Core-v.7-purple)
![EF Core](https://img.shields.io/badge/EF%20Core-v.7-cyan)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v.14-drakblue)

# E-Commerce Webstore

This repository contains the code for an Ecommerce Webstore with a frontend built using React, TypeScript, Material-UI, Styled-Components, and Redux Toolkit, and a backend powered by .NET Core and PostgreSQL.

## Table of Contents
- [Frontend](#frontend-technologies)
- [Frontend Features](#frontend-features)
- [Backend](#backend-technologies)
- [Dependencies](#backend-dependencies)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)

## Frontend  <a name="frontend-technologies"></a> 

- TypeScript
- React
- Redux Toolkit
- MaterialUI
- Styled-Components

## Frontend Features <a name="frontend-features"></a> 

- display products by category
- sort products from lowest price to highest price (lowest price - highest price , highest price - lowest price)
- sort products alphabetically (A-Z , Z-A)
- display single product details
- CART: add to cart
- update products's quantity in cart
- calculates total price of products in the cart
- remove products from the cart
- clear all products in the cart
- register and login as a user
- responsive to different screen size
- pagination- calculates the products length for all items and for each category
- register feature
- login feature
- add products to favorites

<img width="641" alt="Screenshot 2023-01-11 at 16 18 31" src="https://user-images.githubusercontent.com/46716968/211834754-557c81d6-0b08-4f12-b285-aa5518578f18.png">
<img width="650" alt="Screenshot 2023-01-11 at 16 19 48" src="https://user-images.githubusercontent.com/46716968/211834776-f299e310-c555-4282-ad04-b161852911e2.png">
<img width="646" alt="Screenshot 2023-01-11 at 16 20 59" src="https://user-images.githubusercontent.com/46716968/211834781-57672b41-d231-4c3f-b3d5-e17a7e02408e.png">

## Backend <a name="backend-technologies"></a> 

- .NET
- Entity Framework 7
- PostgreSQL
- [Swagger UI](https://ecommerce-backend2.azurewebsites.net/swagger/index.html)

## Dependencies <a name="backend-dependencies"></a> 

- AutoMapper version 12.0.1
- AutoMapper.Extensions.Microsoft.DependencyInjection version 12.0.1
- BCrypt.Net-Next version 4.0.3
- Microsoft.AspNetCore.Authentication.JwtBearer version 7.0.8
- Microsoft.AspNetCore.Cors version 2.2.0
- Microsoft.AspNetCore.OpenApi version 7.0.8
- Microsoft.EntityFrameworkCore version 7.0.8
- Microsoft.EntityFrameworkCore.Design version 7.0.8
- Microsoft.IdentityModel.Tokens version 6.31.0
- Npgsql.EntityFrameworkCore.PostgreSQL version 7.0.4
- Swashbuckle.AspNetCore version 6.5.0
- Swashbuckle.AspNetCore.Filters version 7.0.6
- System.IdentityModel.Tokens.Jwt version 6.31.0

<img width="770" alt="Screenshot 2023-07-04 at 5 03 10" src="https://github.com/iamtigermaximus/ecommerce-react-postgresql-dotnet/assets/46716968/689b3e56-3dd7-4974-bc35-72478e306976">
<img width="767" alt="Screenshot 2023-07-04 at 5 03 43" src="https://github.com/iamtigermaximus/ecommerce-react-postgresql-dotnet/assets/46716968/47f039e7-e679-40cc-b588-e96be92e0b7b">
<img width="771" alt="Screenshot 2023-07-04 at 5 04 17" src="https://github.com/iamtigermaximus/ecommerce-react-postgresql-dotnet/assets/46716968/09a69108-d91b-4164-ae37-7c9fff84abc9">
<img width="775" alt="Screenshot 2023-07-04 at 5 04 48" src="https://github.com/iamtigermaximus/ecommerce-react-postgresql-dotnet/assets/46716968/ad066729-5b76-49db-89d3-0f8345c6a58f">


## Getting Started  <a name="getting-started"></a> 

To run the Ecommerce Webstore on your local machine, follow these steps:

- Clone the repository: git clone https://github.com/your-username/ecommerce-webstore.git
- Navigate to the frontend directory: cd ecommerce-webstore/frontend
- Install frontend dependencies: npm install
- Start the frontend development server: npm start
- Open another terminal and navigate to the backend directory: cd ../backend
- Install backend dependencies: dotnet restore
- Start the backend server: dotnet run

## Endpoints <a name="endpoints"></a> 

| Method |       Endpoint            |          Description                 | Authorization |
|--------|---------------------------|--------------------------------------|---------------|
| Post   | api/v1/Auths              | Login and obtain JWT token           | Not required  |
|        |                           |                                      |               |
| Get    | api/v1/Products           | Get a list of all products           | Not required  |
| Get    | api/v1/Products/{id}      | Get a single product by ID           | Not required  |
| Post   | api/v1/Products           | Create a new product                 | Bearer Token  |
| Put    | api/v1/Products/{id}      | Update an existing product by ID     | Bearer Token  |
| Delete | api/v1/Products/{id}      | Delete an employee by ID             | Bearer Token  |
|        |                           |                                      |               |
| Get    | api/v1/Categories         | Get a list of all categories         | Not required  |
| Get    | api/v1/Categories/{id}    | Get a single category by ID          | Not required  |
| Post   | api/v1/Categories         | Create a new category                | Bearer Token  |
| Put    | api/v1/Categories/{id}    | Update an existing category by ID    | Bearer Token  |
| Delete | api/v1/Categories/{id}    | Delete an category by ID             | Bearer Token  |
|        |                           |                                      |               |
| Get    | api/v1/Carts              | Get a list of all carts              | Not required  |
| Get    | api/v1/Carts/{id}         | Get a single cart by ID              | Not required  |
| Post   | api/v1/Carts              | Create a new cart                    | Bearer Token  |
| Put    | api/v1/Carts/{id}         | Update an existing cart by ID        | Bearer Token  |
| Delete | api/v1/Carts/{id}         | Delete an cart by ID                 | Bearer Token  |
|        |                           |                                      |               |
| Get    | api/v1/CartItems          | Get a list of all cart items         | Not required  |
| Get    | api/v1/CartItems/{id}     | Get a single cart item by ID         | Not required  |
| Post   | api/v1/CartItems          | Create a new cart item               | Bearer Token  |
| Put    | api/v1/CartItems/{id}     | Update an existing cart item by ID   | Bearer Token  |
| Delete | api/v1/CartItems/{id}     | Delete an cart item by ID            | Bearer Token  |
|        |                           |                                      |               |
| Get    | api/v1/Users              | Get a list of all users              | Not required  |
| Get    | api/v1/Users/{id}         | Get a single user by ID              | Not required  |
| Post   | api/v1/Users              | Create a new user                    | Not required  |
| Put    | api/v1/Users/{id}         | Update an existing user by ID        | Not required  |
| Delete | api/v1/Users/{id}         | Delete an user by ID                 | Not required  |




