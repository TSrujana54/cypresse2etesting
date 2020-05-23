## integration Testing
 - Cypress Testing
  - javascript framework to test E2E
## install Cypress
 - npm install cypress --save dev
- Cypress folder is created

## to run predefined example 
- npx cypress open

- Removed example folder in cypress integration

## creating E2E integreation test
- add a keepnote.spec.js
 - test suite using describe method
- create before each for , what to do before each testing

## to acces the application
    open cypress.json file add following script
    {
        "baseUrl" :"http://localhost:3000"
    }
then  in package.json add script for cypress
"cypress":"cypress open"

then run the cypress 
npm run cypress
