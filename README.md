# Express.js Routing Example

This project demonstrates how to use **Express.js** to create modular routes, handle multiple request types, send HTML files, and chain middleware using `next()`.

It’s a great example for beginners learning how Express routing works in Node.js applications.

---

## Dependencies

This project's dependencies are:

- **express**  
- **path**

---

## Routes Overview

### `/`
**Method:** `GET`  
**Description:** Returns the root address.  
**Access:** [http://localhost:8000/](http://localhost:8000/)

---

### `/about`
**Method:** `GET`  
**Description:** Accesses the about page.  
**Access:** [http://localhost:8000/about](http://localhost:8000/about)

---

### `/contact`
**Method:** `GET`  
**Description:** Returns the contact page.  
**Access:** [http://localhost:8000/contact](http://localhost:8000/contact)

---

### `/date`
**Method:** `GET`  
**Description:** Accesses the date page, formatted using JavaScript’s `Date()` object.  
**Access:** [http://localhost:8000/date](http://localhost:8000/date)

---

### `/welcome/:name`
**Method:** `GET`  
**Description:** Displays a personalized welcome message using a dynamic URL parameter.  
**Access:**  
`http://localhost:8000/welcome/(N)`  
where **(N)** is a custom user input (e.g., `/welcome/Alice`).

---

### `/chain`
**Method:** `GET`  
**Description:** Demonstrates chained route handlers using `next()`.  
**Access:** [http://localhost:8000/chain](http://localhost:8000/chain)
