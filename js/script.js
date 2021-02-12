/*1. Convert the following highlighted identifiers to Camel Case notation */

/* Declaring in Camel Case Notation */
// let someMonth;
// function theMonth();
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

/**************************************************************************** */
/* 2.    Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression. */

// let a = 5.4; //numeric literal
// let b = "string "; // string literal
// let c = false; // boolean literal
// let d = null; // literal null value

/************************************************************************************* */
/* 3.    Give me two examples of complex / variable expressions. */

// let complex1 = 3 * (4 / 5) + 6; //
// let complex2 = complex1 + (8 * 5 );

/************************************************************* */
/* 4.    Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers. */

// let strFirstName;
// let strLastName;
// let strAddress;
// let strCity;
// let strState;
// let strZipCode;
// let numYourAge;
// let strReferralSource;
// let strMayWeContactYou;

/***************************************************************** */
/* 5.    Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables. */

// let strFirstName ="Stanley";
// let strCity = "San Diego";
// let strState = "CA";

/***************************************************************** */
/* 6.    Create a variable. Add a number and a string and display the coerced result in the browser’s console window.  */ 

// let var1 ;
// var1 = 1 + " is number of records";
// console.log(var1);

/******************************************************************** */
/* 7.    Create two variables. 
For the first variable, add a Boolean and a string and display the coerced result. 
For the second variable, add a number and a Boolean and display the coerced result.  */

// let firstVar , secondVar;
// firstVar = true + ' this is the coerced string';
// document.write(`the first Variable is : ${firstVar}<br/>`);
// secondVar = 10 + true;
// document.write(` the second variable is : ${secondVar}`);


/********************************************************************** */
/*8. 8.    Is the following string literal valid? If not, how would you fix it?
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';window.console.log(someString); */

// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former." ';
// window.console.log(someString);

/************************************************************************************ */
/* 9.    Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window. */

// let nullVariable = null;
// console.log(nullVariable);
// let undefVariable;
// console.log(undefVariable);

/************************************************************************************ */
/* 10.  Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined. */

// let y;
// let car = new Object();

// console.log(typeof("hello")); 
// console.log(typeof(5));
// console.log(typeof(true));
// console.log(typeof(car));
// console.log(typeof(y));

/************************************************************************************ */
/* 11.  Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
Hello Zak Ruvalcaba, welcome to the JavaScript class!Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma. */

// alert("Hello" + " Shilpi" + ", welcome to the JavaScript class!");


/************************************************************************************ */
/*12.  Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead. */

// let name = "shilpi";
// alert("Hello " + name + ", welcome to the JavaScript class!");

/************************************************************************************ */
/* 13.  Declare a variable called course and set it equal to “JavaScript”. Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text. */

// let course = "JavaScript";
// alert("Hello " + name + ", welcome to the " + course + " class!");

/************************************************************************************ */
/* 14.  Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:Hello Zak Ruvalcaba.Welcome to the JavaScript class! */

// let course = "JavaScript";
// alert("Hello " + name + ", \nWelcome to the " + course + " class!");

/************************************************************************************ */
/* 15.  Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.   */

// let name = prompt("Please enter your name :");
// let course = "JavaScript";
// alert("Hello " + name + ", \nWelcome to the " + course + " class!");

/************************************************************************************ */
/* 16.  Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.  */

// let name = prompt("Please enter your name :");
// let course = prompt("Please enter Course name :");
// alert("Hello " + name + ", \nWelcome to the " + course + " class!");

/************************************************************************************ */
/* 17.  Declare a variable called x and assign it a value of 10. 
Declare a variable called y and assign it a value of 20. 
Display the sum of those two numbers in the console window.   */

// let x = 10;
// let y = 20;

// console.log(x+y);

/************************************************************************************ */
/* 18.  Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window.The result should be 40.  */

// let x = 20;
// x += 20;
// console.log(x);

/************************************************************************************ */
/* 19.  Declare a variable called x and assign it a value of 20.
Multiply and assign 5 to that variable and display the result in the console window. 
The result should be 100.  */

// let x = 20;
// x *= 5;
// console.log(x);


/************************************************************************************ */
/* 20.  Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.Divide and assign 1 to that variable and display the result in the console window. 
The result should be 2. If you got 6.66 try again.  */

// let x = 20 % 3;
// console.log(x);
/************************************************************************************ */
/* 21.  Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window. */
// let num1 = prompt("Enter a number between 1 to 10");


// if(num1 > 1 && num1 < 10)
//     console.log("You entered right number betwee 1 and 10");
// else
//     console.log("You entered wrong number");


/************************************************************************************ */
/* 22.  Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.  */

// let num1 = prompt("Enter first number between 1 to 10");


// if(num1 <= 1 || num1 >= 10)
//     console.log("You entered wrong number");
// else
//     console.log("You entered number between 1 to 10");


/************************************************************************************ ************************************************************************************* */





