# simple-crud-api
Simple CRUD API (RS School project)

• Installation

1. Github link: <code>https://github.com/tims-crew/simple-crud-api.git</code> </br>
2. <code>npm i</code>

• Run

to run in development config:
``` bash
npm run start:dev
```
to run in production config:
``` bash
npm run start:prod
```

• Usage </br>
<code>GET /api/person/</code> - get all people</br>
<code>GET /api/person/${id}</code> - get exactly person</br>
<code>POST /api/person</code> - create new person using model: { name: string, age: number, hobbies: string[] }</br>
<code>PUT or PATCH /api/person/${id}</code> - update the person using <code>id</code> </br>
<code>DELETE /api/person/${id}</code> - delete person by <code>id</code> </br>
