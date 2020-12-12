### INCOMING CHANGE
UPDATE of the UI

### FULLSTACK PROJECT
Inside the front folder, you will have the UI as developement env.

You will found a build of the UI in `API/public`

### REQUIREMENT

You have to create `db` folder at the root of the API folder. 
In this folder, create `dbUser.ts` and past this code: 
```ts 
export default { 
    pseudo: '<pseudo>',
    password: '<password>',
    dbName: '<dbName>',
    personalLink: '<link of your atlasDB>', 
  } 
```
### FOR RUN THE PROJECT
`cd API`

Dont forget to create your `dbUser.ts` for your `db` configuration

`npm install` then `npm start`

### API
API are made with `Node.js` with `Typescript`

Endpoint of the API: 
    USER ROUTES
    `/user` - post
    `/user/id` - get / delete / put
    `/users` - get / delete
    PROJECT ROUTES
    `/project` - post dsq
    `/project/id` - get / delete / put
    `/project` - get / delete
    
When deleting user, each project of this user are deleted too. 
    
### UI
UI made with `React.js` with `JSX`
