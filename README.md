# News Explorer
**Yandex Practicum final graduation project**

![News Explorer Preview](./gh_news.png)

News Explorer is a single page application to search global news by search keywords using News API. The application also includes registration/authorization functionality with the ability for users to bookmark news cards. This app is a final graduation project at 'Web Developer' program at [Yandex Practicum](https://practicum.yandex.com/) coding school. Includes frontend and backend (MERN stack).

* Current live version at [https://news.catlogic.ru/](https://news.catlogic.ru/)

---
## Technology used

### Frontend

* HTML/CSS
* React (+ react-dom, react-router)
* JavaScript (ES6)
* I18next (multiple language support)

### Backend
* Node.js/Express.js
* MongoDB
* Node/Express libraries

### Additional info
* Semantic and accessible HTML, modern CSS (Flexbox, Grid, transitions).
* Fully responsive layout, optimized for screen resolution from 320px by width.
* JavaScript ES6 (async/await, fetch API).
* React frontend:
  * Functional components.
  * Context, Ref, Redirect, Route, Switch functions.
  * useState, useEffect, useContext, useRef, useCallback, useHistory hooks.
  * Authorization, frontend validation, protected 'bookmarks' route (unreachable for unregistered users).
  * Global context used for storing user data.
  * Fetching and processing data from News API.
  * Saving data to local API.
  * Utilizing LocalStorage to save search data between sessions.
  * *I18next* framework used for English/Russian localization.
* Node/Express backend:
  * *REST API*, saving/fetching data, user registration/authorization.
  * Data stored in local MongoDB (schema, CRUD) using *Mongoose*.
  * Multiple stages of data validation (*validator*, *joi/celebrate*).
  * Password data is encrypted using *bcryptjs*.
  * Server cookie with secure JWT token used for authentication.
  * Access & error logging using *winston*.
  * Authentication-protected routes.
  * Centralized middleware for errors handling with correct status and message responses.
  * Secure headers by *helmet*
  * Request *rate limit* middleware
* Code style by *ESLint* in *airbnb-base* config.
