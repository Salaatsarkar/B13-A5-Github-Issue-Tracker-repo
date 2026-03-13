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
-> 









3️⃣ What is the difference between map(), filter(), and forEach()?
4️⃣ What is an arrow function?
5️⃣ What are template literals?
