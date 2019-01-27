
# Welcome to CodeNote project.

First thing first, please send me your github email account so that I can add you to this project as contributor.

CodeNote is a onboarding project that helps codelink new member can get familiar with our company font-end technical stack such as:
- ReactJS
- Redux
- React Router
- ES6
- Typescript
- Jest

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
