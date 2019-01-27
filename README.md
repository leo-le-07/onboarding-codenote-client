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

## Part I - Basic features

First, clone project to your local
```
$ git clone git@github.com:leo-le-07/onboarding-codenote-client.git -b task-1/add-basic-features /your/folder
```

Install packages
```
$ npm install
```

Start project
```
$ npm start
```

Now you can access application at http://localhost:3000

#### Basic requirement: Login feature
We already have Signup feature as example.
Now we want to help a user can login with email (admin@example.com) and password (123456) at path `/login`.
The UI should be like this
![Login](https://raw.githubusercontent.com/leo-le-07/onboarding-codenote-client/task-1/add-basic-features/src/assets/screenshots/login.png)

_Hints:_
- Currently we're using **aws-amplify** library to support us to interact with AWS services. In case log in, you can use method `Auth.signIn` from that library.
- After log in successfully, you need to call `userHasAuthenticated` method, that passes from `App` component, to notify other components in our application that we already log in successfully.


#### Optional requirement: Create note feature
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


## Part II - Working with Redux
In part I, we manage user logged in state in `App` component as `isAuthenticated` internal state. Then passing that state as `childProps` to all nested children. It still works in the beginning but for real project with lots of states, it hards to manage in this way.

Redux is come up with a convenient way to share state in our application.

#### Basic requirement: Login feature
Checkout and create new a branch
```
$ git fetch
$ git checkout task-2/working-with-redux
$ git checkout -b task-2/working-with-redux-implement
```
Start project
```
$ npm start
```
You'll see the website is broken because we already removed `isAuthenticated` internal state from `App` component and remove passing `childProps` to `ScreensRoot` component as well.

The requirement is that we'll manage state by redux and make the website works normally again.

#### Submit Pull Request
When finishing, please create a pull request to branch `task-2/working-with-redux`

