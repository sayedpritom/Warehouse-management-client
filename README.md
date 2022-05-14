# Warehouse management website for shoes

This is a website made for managing warehouse inventory of shoes. 

## Website link: https://warehouse-eebb3.web.app

Website features and functionalities: 

* Home page with a header (simple navbar), banner, items (inventory items. Maximum 6 items), advantages section, pricing section, feature section,  footer section.

* Extra sections(advantages section, pricing section, feature section,) on the home page.

* Six items in the inventory items section. Each article have a relevant name, image, short description, price, quantity, supplier name, and an update button.

* Clicking on the button takes the user to the inventory/:id route. This route is a private/protected route. The private route redirects to the login page if the user is not logged in. After login, the user is redirected to the page he/she wanted to go to. 

* The inventory/:id page displays detailed item information like id, name, image, description, price, quantity, supplier name, sold, etc. This page has a Button named delivered. Once this button is clicked, it reduces the quantity of the item by one  and changes  the quantity on the website.

* a small form on the inventory/:id page. To restock the items. An input field where some numbers can be put . And hitting the button will increase the quantity of the item.

* Manage Inventories button at the bottom of the inventory section of the home page. The same bottom on the inventory:/id page. This link button takes to the manage inventory page. This page shows all the inventory items. Every item has a delete button. This deletes the item. 

* ON the Manage Inventories page, there is a button named add new item. It takes to the add inventory item page and there is a form for adding new items.

* Implemented email/password-based authentication and social login(google, github) authentication. Once a user is logged in, the logout/sign-out button appears on the header, signing out the user once clicked.

* If a user is logged in, he/she will see more options like Manage Items, Add Item, My items, Logout.

* On the My Items page, the logged-in user sees only his/her Items. If the user wants, he/she is able to cancel/delete any item.  User is also can delete an item either from the Manage Inventories page and from the My Items page.

* Added two more routes. one route is be blogs. Another is 404 not found. 

* Displays error when user email address or password don't match.

* Sends Email Verification while singing in new user.

* Full responsive website

* Added a loading spinner if data is loading.

* Used the Environment variable on both the client and server-side. Used .gitignore file on the server-side.

* Implemented the basic version of the jwt token for email/password based authentication. 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# warehouse-management-client-side-sayedpritom999" 
