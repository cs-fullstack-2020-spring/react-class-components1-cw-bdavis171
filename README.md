# Class components

# React Introduction Class Components 1 Classwork

### Exercise 1:
Create a new React application using ```create-react-app``` called ```greetings```. Create a React component called ```SayHello``` that doesn't accept any properties and will render 

```<h2>Well Hello There!</h2>```. 

Create a 2nd React component called ```SayHowdy``` that doesn't accept any properties and will render 

```<h2>Howdy Partner!</h2>```. 

From the main ```app.js``` module, render both React components.

### Exercise 2:
Create a new React application using ```create-react-app``` called ```got_bank```. Create a React component called ```BankAccount``` that accepts ```customerName``` and ```balance``` as properties and will render 
```
<h2>Welcome FIRSTNAME_PASSED_IN</h2> 
<h3>Your account balance is $BALANCE_PASSED_IN</h3>
``` 

From the main ```app.js``` module, render the component and pass in the 2 properties. 

### Challenge:
Create a new React component called ```Netflix```. In ```Netflix``` component create an array of at least 3 Movie object literals with the properties ```movieName```, ```yearReleased```, and ```genre```. Render the ```NetFlix``` component from ```app.js``` and then have that component, render a 2nd child component called ```DisplayMovies```, passing in the array of movies to the child component. In ```DisplayMovies```, print the movies and their information from the properties passed in.
