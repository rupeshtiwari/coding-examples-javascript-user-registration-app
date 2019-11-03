# Welcome to the Javascript HTML CSS jQery starter app

View this app live in my Heroku account

https://rupesh-user-registration.herokuapp.com/

## Before watching this video make sure to watch

### Add / Delete / Update Usecase explaination workshop

1. https://www.youtube.com/playlist?list=PLZed_adPqIJpo5MmmJNmwpTsovBiAHO78
   (Create Web Application- Workshop | Demo | Node.js | Mean.js In this workshop you will understand the high level approach of this project. Where we will discuss add/edit and delete use case)

### Add / Delete / Update Usecase Autonoumous Component explaination workshop

2. https://www.youtube.com/playlist?list=PLZed_adPqIJrL-BW84lV03K6MZANFj89V
   (Autonomous Component | Demo | Introduction | JavaScript In this video you will understand what is Autonomous Component.)

## After watching this playlist please watch below playlist:

1)https://www.youtube.com/playlist?list=PLZed_adPqIJruQ-fd1MWBeLpKJ6RvdaBb

In this tutorial, we're going to create a simple web app which organizes a list of users profiles. It demonstrates how to add user using test driven development. We are going to use standard tools & libraries on the front end such as JavaScript, Bootstrap, jQuery, Webpack, and of course, HTML/CSS. We will use Vs Code for writing code. You will learn how to write unit test. We will do test driven development and learn how to first write test then write production code. The entire application will be written in event driven style. We will use pub-sub library to communicate between autonomous components(https://www.youtube.com/watch?v=xRiM_tJqzAg&list=PLZed_adPqIJrL-BW84lV03K6MZANFj89V) using events / messages. We will follow Single Responsibility Principle from SOLID design principles (https://www.youtube.com/watch?v=99EAJRDqsOM&list=PLZed_adPqIJoMn7uhD7IlYTjpJI3fsLd2) and write clean code.

Startup App: https://github.com/rupeshtiwari/Training-JavaScript-App-Starter/tree/master
Workshop Source Code: https://github.com/rupeshtiwari/Training-JavaScript-App-Starter/tree/workshop-1

Starter app for learning `javascript,jquery,css` project.

## Prerequisites

- Download [Node.JS](https://nodejs.org/en/) and install it.
- `node -v` it will show you the installed version
- `npm -v` npm version

## First Time Setup

### Starting App

Download this starting project for following along this project
https://github.com/rupeshtiwari/javascript-web-application/releases/tag/Starter

Open `command promt or powershell or visual studio code terminal` and run below script to get this project at your box

- Run below script to download the code to your box

        git clone https://github.com/roopkt/Training-JavaScript-App-Starter.git

- Run below script to navigate to the created folder

        cd Training-JavaScript-App-Starter

- Run below script to get all node packages installed

        npm i

## Start

To start app, go to the `Training-JavaScript-App-Starter` open the folder in `visual studio code` or your favorite editor.
Open Terminal from `vscode` then run `npm start` or `Ctrl+B`.
It will launch a browser and watch any file changes inside the `src` folder and refresh your browser automatically.

## ☀️ Controller Explaination

👉 **Controller is the abstraction over the `DOM`**.
Any operation that we do on the DOM should be done by controller only.
Controller should not directly change `Store` object.

## Example: While typing on input box we want to validate.

So controller will read the DOM value and create a `User Object` and publish a message (`ADD_USER_FORM_UPDATED`).

`ADD_USER_FORM_UPDATED message`

```js
{
   type:'ADD_USER_FORM_UPDATED',
   payload: { name:  'Rupesh Tiwari', emailId: 'info@rupeshtiwari.com'}
}
```

## Example: While submitting the `user form`

**controller's job is to read the DOM** values and create `user object`
and publish a `command` (`ADD_USER`) to save the `user` in the server.

`ADD_USER message`

```js
{
   type:'ADD_USER',
   payload: { name:  'Rupesh Tiwari', emailId: 'info@rupeshtiwari.com', userId:'1'}
}
```

### When Add_USER_SUCCESS happens

**controller's job is to show the user value in the DOM**.

## Example: While deleting the `user`

**controller's job is to read the `User Id` from the DOM**  
and publish a `command` (`DELETE_USER`) to delete the `user` from the server.

### When DELETE_USER_SUCCESS happens

**controller's job is to remove the user from the DOM**.
`DELETE_USER message`

```js
{
   type:'DELETE_USER',
   payload: { userId: '1'}
}
```

## Steps

1- Webpack
2- Add User Form Validation
3- Add User
4- Delete User
5- Deploy to Heroku Cloud

## Compatibility

It will not support any `ES6` Features
This app is more of `ES5` oriented javascript
No modules no `ES6` Features supported
No routing is supported
Just single html file support
