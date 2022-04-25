<img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/6021a71ea023a000010884da/0x0.png" width="500" />

---

# Boxhub Take Home Task

An interactive Full Stack Web Application to view Orders and perform CRUD operations on them.

## 🔗 Live Demo

[Click For Live Demo](https://boxhub-harshitbehl.vercel.app)

## 💻 Run Locally

Clone the project

```bash
  git clone https://github.com/harshitbehl/boxhub-harshitbehl.git
```

Go to the project directory

```bash
  cd boxhub-harshitbehl > cd client (Frontend) or cd server (Backend)
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 🔖 Features

- Interactive sticky header with an animated github source code button & links.
- Beautiful and interactive landing page showcase with animations.
- Available orders list with data grid showcase.
- Create orders by navigating through "Create Order" link from Navbar.
- Update & Delete order actions are available on each order itself on main orders showcase.
- Modern & attractive form design throughout the application.
- Forms are interactive and change as we enter inputs.
- Form validations & error handling on both client and server.
- Modern footer with material themed icons and text.
- Animated links on hover.

**Note:** Most of the links are dummy links at the moment.

## 📸 Screenshots

**Landing Page & Orders Showcase**

![Landing Page & Orders Showcase](/assets/readmeImages/ordersShowcase.png)

**Create Order Section**

![Create Order Section](/assets/readmeImages/createOrder.png)

**Form Action Buttons**

![Form Action Buttons](/assets/readmeImages/formActions.png)

**Update Order Section**

![Update Order Section](/assets/readmeImages/updateOrder.png)

**Footer Section**

![Footer](/assets/readmeImages/footer.png)

## 📌 Tasks Performed

**Requirement Gathering & Analysis**

- Select tech stack to solve the task.
- Setup project boilerplate and install packages, libraries and dependencies.
- Create a scalable directory structure with separation of concerns.

**Design**

- Select & wireframe application layout & design, take inspiration from boxhub website.
- Select application theme, color pallette & typography.
- Break application into components while ensuring it stays scalable.

**Development (Coding & Implementation)**

- Develop major components: header, orders, orders create, orders update, orders form, footer.
- Add styling, transitions & animations to application components.
- Implement orders data grid showcase through MaterialUI.
- Implement forms to create & update orders.
- Implement form & form validation on client (Formik & Yup) and server (Mongoose).
- Develop REST API to perform CRUD operations on orders.
- Implement CORS on server side for cross origin access.
- Create NoSQL database through MongoDB Atlas for storing and persisting data throughout application.
- Implement react routing for easier navigation on client side.

**Testing**

- Manual test each and every field using every possible input and values.
- Add more validations according to possible scenarios.
- Perform unit testing using jest & react testing library.

**Deployment**

- Create a final build of application.
- Deploy client on vercel.
- Deploy server on heroku.

**API Reference**

- Get All Orders (GET): https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders
- Get Specific Order (GET): https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders/:orderId
- Create Order (POST): https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders
- Update Order (PATCH): https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders/:orderId
- Delete Order (DELETE): https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders/:orderId

## ⚙️ Tech Stack

**Development:** React, React Router, Axios, JavaScript, Node.js, Express, Mongoose

**Database:** MongoDB Atlas

**Forms & Form Validations:** MaterialUI Data Grid, Formik, Yup

**Styling:** SASS, CSS

**Animations & Transitions:** Framer Motion, CSS Animations

**Icons:** React Icons

**Testing:** Jest, React Testing Library

**Package Manager:** NPM

**Deployment:** Vercel (Client), Heroku (Server)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![MaterialUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## 👨🏽‍💻 Author

- [@harshitbehl](https://github.com/harshitbehl)
