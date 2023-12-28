# MVC vanilla JS 
Project was inspired by [Learning JavaScript Patterns](https://www.amazon.com/Learning-JavaScript-Design-Patterns-Developers/dp/1098139879). It aims to implement oryginal MVC presented in 1979 using observer pattern. 

## Architecture explanation
<img width="533" alt="image" src="https://github.com/teoMiesiac/mvc-vanilla-js/assets/21129815/159a0f81-9bfc-4a25-9169-65df8f963118">

- Model represents domain specific data. It's ignorant of the UI (Views, Controllers). When Model changes it notifies it's observers.
- View represents current state of a Model and takes care of presentation. Observer pattern was used to let the View know whenever the Model was updated or modified.
- Controller role is to handle user interaction (key press, clicks) and making decisions for the View.

## Building and running on localhost

First install dependencies:

```sh
npm install
```
To create a development build:

```sh
npm run build-dev
```
