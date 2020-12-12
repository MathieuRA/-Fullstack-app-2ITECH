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
