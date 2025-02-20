# Angular Parse Demo

This repository contains an Angular project that demonstrates the implementation of a responsive login page using Angular Material and Parse JS SDK to authenticate with a preconfigured Parse Server.
See the [Parse Server Typescript Example](https://github.com/beppemacchia/parse-server-ts-example) repo to instantiate a Parse Server.

## Installation
1. Clone the repository to your local machine:
```mark
git clone https://github.com/beppemacchia/angular-parse-demo.git
```
2. Navigate to the project directory:
```mark
cd angular-parse-demo
```
3. Install the dependencies:
```mark
npm install
```
4.Start the development server:
```mark
ng serve
```
5.Open your browser and visit http://localhost:4200 to view the login page.

## Usage
* Enter your email address in the email field.
* Enter your password in the password field.
* Click the "Login" button to submit the form.
* If the credentials are invalid, an error message will be displayed.
* If the provided credentials are valid, you will be logged in and show the Message "Hello {email}" with a button to Logout.

## Licenses
This project uses the following licenses for the programming languages used:

- Angular CLI: v19.1.8
- Node: v20.11.1
- Package Manager: npm v10.2.4
- typescript : v5.7.3
- angular/material : v19.1.5
- parse : v5.3.0