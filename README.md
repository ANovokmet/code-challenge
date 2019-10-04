# code-challenge

My solution to the fullstack coding challenge.

## Running

Change working directory to *server*, run `npm install`, `npm start` and navigate to [http://localhost:3000/code-challenge](http://localhost:3000/code-challenge).

## Algorithm

Implementation is located at [server/services/encoder.js](server/services/encoder.js). 

## Backend

New endpoint is located at [server/encode.js](server/encode.js).

### Running tests

Run `npm test` inside *server* project folder. There are two test suites, one for the encoder algorithm itself, and one for the new endpoint. 

## Frontend

An endpoint was created to serve static files needed by the application. This was made so the app can be run without running both projects at once. Angular app can still be run in dev mode by running `npm install`, `npm start` inside *app* folder.

Password validator is implemented [here](app/src/app/core/directives/at-least-one-digit.directive.ts), authorization to the protected endpoint [here](app/src/app/core/interceptors/auth.interceptor.ts), route guard protecting the encoder page [here](app/src/app/core/guards/auth.guard.ts).

## Design decisions

Encoder algorithm is located in *server/services* to separate the business logic from the rest of the api code.

*App* contains a core module that organizes app code needed to run the app, separated from the UI components.

Api calls are done trough store *Effects*. That helps with cleaner component code (components do not need to handle responses). 