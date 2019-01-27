# Welcome to CodeNote project.

First thing first, please send me your github email account so that I can add you to this project as contributor.

CodeNote is a onboarding project that helps codelink new member can get familiar with our company font-end technical stack such as:
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/core/guides/philosophy)
- [ES6](http://es6-features.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)

We have 4 main tasks in order to make this project completely. Each task will include 2 parts: basic and optional requirements.

You have to complete the basic requirements first, after that you can move on optional requirements that require more time and challenges to complete.

## Part I - Basic Features

First, clone project to your local
```
$ git clone git@github.com:leo-le-07/onboarding-codenote-client.git /your_folder
$ cd your_folder
```
Checkout and create new a branch
```
$ git fetch
$ git checkout task-1/add-basic-features
$ git checkout -b task-1/add-basic-features-basic-implement
```

Install packages and start project
```
$ yarn install
$ yarn start
```

Now you can access application at http://localhost:3000

#### Basic requirement
We already have Signup feature as example.
Now we want to help a user can login with email (admin@example.com) and password (123456) at path `/login`.
The UI should be like this
![Login](https://raw.githubusercontent.com/leo-le-07/onboarding-codenote-client/task-1/add-basic-features/src/assets/screenshots/login.png)

_Hints:_
- Currently we're using **aws-amplify** library to support us to interact with AWS services. In case log in, you can use method `Auth.signIn` from that library.
- After log in successfully, you need to call `userHasAuthenticated` method, that passes from `App` component, to notify other components in our application that we already log in successfully.


#### Optional requirement
A user can create a note at path `/notes/new`.
The UI should be like this
![Create new note](https://raw.githubusercontent.com/leo-le-07/onboarding-codenote-client/task-1/add-basic-features/src/assets/screenshots/new-note.png)

_Hints:_
- In order to upload file attachment to S3, please use method `s3Upload` from `/libs/awsLib` library.
- For creating new note, we can use `API` method from `aws-amplify` to make a create new note request. For example:
```javascript
API.post("notes", "/notes", { body: { attachment: 's3-url', content: 'our note content' }});
```

#### Submit Pull Request
After finish basic/optional features, please create a pull request to branch `task-1/add-basic-features`


## Part II - Working With Redux
In part I, we manage user logged in state in `App` component as `isAuthenticated` internal state. Then passing that state as `childProps` to all nested children. It still works in the beginning but for real project with lots of states, it hards to manage in this way.

Redux is come up with a convenient way to share state in our application.

Checkout and create new a branch
```
$ git fetch
$ git checkout task-2/working-with-redux
$ git checkout -b task-2/working-with-redux-basic-implement
```
Install packages and start project
```
$ yarn install
$ yarn start
```
You'll see the website is broken when trying to use some features because we already removed `isAuthenticated` internal state from `App` component and remove passing `childProps` to `ScreensRoot` component as well.

#### Basic requirement
The requirement is that we'll manage state by redux and make the website works normally again.

#### Submit Pull Request
When finishing, please create a pull request to branch `task-2/working-with-redux`

## Part III - TypeScript Type Checking
From ReactJS official page
> Static type checkers like [Flow](https://flow.org/) and [TypeScript](https://www.typescriptlang.org/) identify certain types of problems before you even run your code. They can also improve developer workflow by adding features like auto-completion. For this reason, we recommend using Flow or TypeScript instead of `PropTypes` for larger code bases.

In this project, we prefer TypeScript to Flow type.

Checkout and create new a branch
```
$ git fetch
$ git checkout task-3/typescript-type-checking
$ git checkout -b task-3/typescript-type-checking-basic-implement
```
Install packages and start project
```
$ yarn install
$ yarn start
```

#### Basic requirement
If you run type checker command
```
$ npm run checktype
```
You'll see some errors related to 2 components we created in Part I: `Login` and `NewNote`

The requirement is that you need to add TypeScript to those components and make sure type checker passes with no error.

#### Optional requirement
Take a look at file `tsconfig.json` in our project, you will see that we only cover type checkers for 2 components above. Try to include type checker all files inside `src` folder by replacing
```json
  "include": [
    "src/screens/Login",
    "src/screens/NewNote",
  ]
```
with
```json
  "include": ["src"]
```
This time, we'll add TypeScript cover for all files in our project.

#### Submit Pull Request
When finishing, please create a pull request to branch `task-3/typescript-type-checking`

## Part IV - Writing Unit Tests
In this part, we'll add unit tests for our components with Jest and Enzyme support.

Checkout and create new a branch
```
$ git fetch
$ git checkout task-4/writing-tests
$ git checkout -b task-4/writing-tests-basic-implement
```
Install packages and start project
```
$ yarn install
$ yarn start
```

#### Basic requirement
If you run test by this command
```
$ npm run test
```
You'll see an error related to empty test for `Home` component.

The requirement is that we'll fix that error by adding unit test for that component.

#### Optional requirement
Running this command to generate Jest coverage report
```
$ npm run test --coverage
```
Open coverage report file at `coverage/lcov-report/index.html` from root folder. You'll see that most of components in our project are not coveraged.

The optional requirement is that we should add more unit tests to the rest components in order to increase test coverage points.

#### Submit Pull Request
When finishing, please create a pull request to branch `task-4/writing-tests`

## Issues
Feel free to submit issues and enhancement requests.

## Contributing
  
Please refer to each project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork**  the repo on GitHub
2.  **Clone**  the project to your own machine
3.  **Commit**  changes to your own branch
4.  **Push**  your work back up to your fork
5.  Submit a  **Pull request**  so that we can review your changes
