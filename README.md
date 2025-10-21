This project demonstrates how to use Express.js to create modular routes, handle multiple request types, send HTML files, and chain middleware using next().
It’s a great example for beginners learning how Express routing works in Node.js applications.
---
Dependencies
This projects dependencies are express and path. 
---
/ uses a get method to return the root address. This can be accessed via http://localhost:8000/
---
/about uses a get method to access the about page. This can be accessed via http://localhost:8000/about
---
/contact uses a get method to return the contact page. This can be accessed via http://localhost:8000/contact
---
/date uses a get method to access the date page. It is formatted used JavaScript's Date() object.
---
/welcome/:name uses a get method to access the welcome page. It uses the dynamic url parameter. This can be accessed through http://localhost:8000/welcome/(N), where (N) is a custom user input.
---
/chain uses a get method to demonstrate chained route handlers using next(). This can be accessed through the http://localhost:8000/chain


