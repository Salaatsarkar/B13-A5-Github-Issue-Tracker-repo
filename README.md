1️⃣ What is the difference between var, let, and const?
-> var , let and const is used to declare variable in JavaScript. But during its uses it has some difference. The differences relying on some matters. For Example :memory behavior , global binding, temporal dead zone, hoisting, reassignment, redeclaration, scope. In the below I am giving details information avobe this issues.
### Main Features of var
 -> var is function-scoped.This means if you declare a variable inside a function, it can only be used inside that function.
1.Re-assignment Allowed -> You can modify the value of a variable declared with var.
2.Re-declaration Allowed ->With var, you can declare the same variable multiple times.
3.scope of var -> This is the first keyword used for variable declaration in javascript. Before the release of ES6, it was commonly used everywhere.
4.Hoisting ->var supports hoisting. JavaScript moves the variable declaration to the top, but the value remains undefined until it is assigned.
5.Global Object Attachment -> If you declare a var in the global scope, it will become property of the window object in the browser.

### Main Features of let
-> let is block-scoped.If we declare or take let variable inside {} (curly bracket) , it works only inside the block.We can't access the value of this variable outside the block. In 2015, it came with ES6. It is the most popular variable in Javascript.

1. Reassignment is allowed. we will modify or change the value if it is needed.
2. Redeclaration is not allowed. We will not it declare again inside in the same scope.
3. It is hoisted but after declaration. It will show error if we want to access it before declaration. Because  initially before declaration it is remain in Temporal Dead Zone. So it is hoisted but after declation.

### Main Features of const
-> The value of this const variable will remain constant. It is used when the value of this variable won't change.
1. Re-declaration not allowed.
2. Re-assignment not allowed. If it is needed to change, we can't change or modify our main value.
3. It is also block-scoped. In the outside of the block we can't access it.
4. We have to set value during declaration. Must assign value during declaration of the const variable.
5. Declare array or object by this variable, we won't modify or change the reference but we will change the value of inside.

2️⃣ What is the spread operator (...)?
-> Spread operator is a feature of ES6 in Javascript. It is used in array,object,the elements of iterable to separate.Meaning that separate them out one by one . By the three dots(...) is defined this spread operator. It helps to make code clean , small and easy.

--> uses of spread operator(...) in different works
2.1 We can use this operator to merge or copy an object.
2.2 By the help of it we can sent the elements of array one by one as an argument of the function.
2.3 we can use it to spread the characters of strings.
2.4 In the array,we can add new elements.
2.5 we can merge or add multiples arrays together.
2.6 we can make the copy of an array by spread operator.
2.7 This operator helps to copy, add or mege elements of array.

3️⃣ What is the difference between map(), filter(), and forEach()?
-> These are the three array methods of javascript. These methods are used to work on every elements of array. But according the way of working process and result, these methods are different from each other.
### filter()
It is used to select elements based on a specific condition. It returns a new array. This method don't change the main or original array.
 
### map()
It is used to run a function on each element of the array to make a new array. It don't change the main array. This method is used to transform the array.Always it also returns a new array.

### forEach()
It is used to run a loop on each element of array. It works as a loop.It won't return any value. It is used as partial work. It don't return any new array.

4️⃣ What is an arrow function?
-> An Arrow Function(=>) is a modern way of declaration of function.In 2015, it came from ES6. The work of normal function and arrow function is same. But there is some difference to the way of write code. It is small and readable rather than a normal function. Arrow Function is small and easy to write code. If we write arrow function in one line, don't need to write return. By the help of arrow function, we can save our time to write our code in the shortcut.

5️⃣ What are template literals?
-> It is a modern way to make string or text. We use bactick sign(``) to work with this template literals. By the help of it we can create dynamic strings. Meaning that we can add expression and add different type of variable easily inside it. We have to use dolar sign with curly bracket ${} to add expression or variable. We can write any dynamic expression in this ${} syntax. According to our need we will write multi line string easily without the use of /n. It also came from ES6 in 2015.
