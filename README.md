# Tidings 
Tidings is a news web application with the [News API](https://newsapi.org/) integrated.

## NewsApi cons
- We can't run on browser or production mode for a free plan. Paid plan only support on browser
- But we can run our web app on localhost local server
- The instructions are provided below, and they will help you run perfectly on your local server

## Tools and Packages

<img src="https://user-images.githubusercontent.com/43313420/105883616-57dbeb00-6007-11eb-9df2-de0e2a42655c.png" height="100px" alt="Axios"> <img src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" height="100px"   alt="React">  <img src="https://diviengine.com/wp-content/uploads/2021/05/slick-logo.png" height="100px"  alt="Slick">

## Features
- It fetch the most recent news from the news API
- There are different sections
  - The first section displays trending news
  - The second section shows popular news with a slider
  - Another below all section show categories wish news
- There is a side section that is divided into three sections
  - It show top 10 news of india
  - Below it show news categories
  - Then subscribed news box
- There are sliders in each different section
- Each section of news is clickable
- When you click it, the complete news is displayed
- It is a completely responsive website
- Beautiful UI design
## Run Locally
Clone the project
```bash
  git clone https://github.com/MohammadOwais10/Tidings.git
```
Go to the project directory
```bash
  cd project
```
Install dependencies
```bash
  npm install
```
Start the local server 
```bash
  npm start
```

## Environment configurations
Set your "config.env" file according to given below format
```
REACT_APP_NEWS_API_KEYS='NEWS API KEY'
```
You can get your news api key from [https://newsapi.org]
## UI Screenshot
#### Home Section UI
![Tidings-ui-1](https://user-images.githubusercontent.com/91982138/206921987-c01ff458-964e-428a-931d-0b87e8b34b1b.PNG)

#### Popular Section UI
![Tidings-ui-2](https://user-images.githubusercontent.com/91982138/206921999-8efac616-c759-4337-ac6b-20c95142f215.PNG)

#### Topic  Section UI
![Tidings-ui-3](https://user-images.githubusercontent.com/91982138/206922025-864be9f7-ce4f-439b-b240-b586b2357913.PNG)

#### Sub Topic UI
![Tidings-ui-4](https://user-images.githubusercontent.com/91982138/206922041-357331c9-3e43-4f3a-905d-9146613df73c.PNG)

#### Responsive Mobile View Section UI
<img src="https://user-images.githubusercontent.com/91982138/206922054-cd07d30a-ddd1-4330-b89c-de6be277fe60.PNG" width="420px" height="600px"> <img src="https://user-images.githubusercontent.com/91982138/206922058-2b69c610-78aa-4cc4-b0c3-d8864416c7d2.PNG" width="420px" height="600px">


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

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
