const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send('Server running...........'));

EMAIL = 'user@gmail.com';
PASSWORD = '123456';

app.post('/login', jsonParser ,(req, res) =>{
    if(req.body.username == EMAIL && req.body.password == PASSWORD){
        res.send({
            "token": 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mjk3MjI1NjMsInVzZXJuYW1lIjoidXNlckBnbWFpbC5jb20ifQ._XIAFHAuQJwG6IyOQmVilPWXNv8yYP30szQ-urK76so',
            "profile": {
                "id": 2,
                "password": "123456",
                "username": "user@gmail.com",
                "role": "ROLE_ADMIN",
                "authorities": [
                    {
                        "authority": "ROLE_ADMIN"
                    }
                ]
            }        
        });
    }
    else{
        res.send({
            "token": null
        });
    }
})

app.post('/register', jsonParser ,(req, res) =>{
    res.send({
        status: 'true'
    });
})

app.post('/create-project', jsonParser ,(req, res) =>{
    res.send({
        "status": true,
        "projectInfo": {
            "project_id": 3,
            "customer": "Nam Dep Trai",
            "description": "Nam dep trai vl",
            "pm": "Chuyen suc vat",
            "projectName": "Tao suc vat",
            "technology": "java"
        }
    });
})

const listProject = {
    "1": {
        "project_id": 1,
        "customer": "Nam Dep Trai",
        "description": "Nam dep trai vl",
        "pm": "Chuyen suc vat",
        "projectName": "Project Name 1",
        "technology": "java"
    },
    "2": {
        "project_id": 2,
        "customer": "Nam Dep Trai",
        "description": "Nam dep trai vl",
        "pm": "Chuyen suc vat",
        "projectName": "Project Name 2",
        "technology": "java"
    },
    "3": {
        "project_id": 3,
        "customer": "Nam Dep Trai",
        "description": "Nam dep trai vl",
        "pm": "Chuyen suc vat",
        "projectName": "Project Name 3",
        "technology": "java"
    },
    "4": {
        "project_id": 4,
        "customer": "Nam Dep Trai",
        "description": "Nam dep trai vl",
        "pm": "Chuyen suc vat",
        "projectName": "Project Name 4",
        "technology": "java"
    },
    "5": {
        "project_id": 5,
        "customer": "Nam Dep Trai",
        "description": "Nam dep trai vl",
        "pm": "Chuyen suc vat",
        "projectName": "Project Name 5",
        "technology": "java"
    },
    "6": {
        "project_id": 6,
        "customer": "Nam Dep Trai",
        "description": "Nam dep trai vl",
        "pm": "Chuyen suc vat",
        "projectName": "Project Name 6",
        "technology": "java"
    }
};

const listPM = [
    {"username":"user1@gmail.com"},
    {"username":"user2@gmail.com"},
    {"username":"user3@gmail.com"},
];

app.get('/get-pm', jsonParser ,(req, res) =>{
    res.send(
        listPM
    );
})

app.get('/get-projects', jsonParser ,(req, res) =>{
    res.send(
        listProject
    );
})

const listUser = [
    {email: 'user1@gmail.com', id: '1'},
    {email: 'user2@gmail.com', id: '2'},
    {email: 'user3@gmail.com', id: '3'},
    {email: 'user4@gmail.com', id: '4'},
    {email: 'user5@gmail.com', id: '5'},
    {email: 'user6@gmail.com', id: '6'},
    {email: 'user7@gmail.com', id: '7'},
    {email: 'user8@gmail.com', id: '8'},
    {email: 'user9@gmail.com', id: '9'},
    {email: 'user10@gmail.com', id: '10'}
];

app.get('/get-users', jsonParser ,(req, res) =>{
    res.send(listUser);
})

app.post('/add-user', jsonParser ,(req, res) =>{
    res.send({
        status: 'true',
    });
})

app.post('/log-time-sheet/create', jsonParser ,(req, res) =>{
    res.send({
        status: true
    });
})

app.post('/user-project', jsonParser ,(req, res) =>{
    res.send([
        {project_id: '1' ,project_name: 'Project Name 1'},
        {project_id: '2' ,project_name: 'Project Name 2'}
    ]);
})

app.post('/project-detail', jsonParser ,(req, res) =>{
    res.send(
        {
            "project": {
                "project_id": 1,
                "projectName": "Project Name 1",
                "customer": "Mr.Bean",
                "pm": "Mr.IoC",
                "technology": "java",
                "description": "awesome project"
            },
            "list_user": [
                {
                    "id": 2,
                    "username": "user1@gmail.com"
                },
                {
                    "id": 3,
                    "username": "user2@gmail.com"
                },
                {
                    "id": 4,
                    "username": "user3@gmail.com"
                }
            ]
        }        
    );
})

app.post('/user/user-projects', jsonParser ,(req, res) =>{
    res.send([
        {project_id: '1' ,projectName: 'Project Name 1'},
        {project_id: '2' ,projectName: 'Project Name 2'},
        {project_id: '3' ,projectName: 'Project Name 3'},
        {project_id: '4' ,projectName: 'Project Name 4'},
        {project_id: '5' ,projectName: 'Project Name 5'},
        {project_id: '6' ,projectName: 'Project Name 6'},
        {project_id: '7' ,projectName: 'Project Name 7'},
        {project_id: '8' ,projectName: 'Project Name 8'}
    ]);
})

listNoteUsers = [
    {
       "id": 2,
       "project_id": 1,
       "projectName": "Project Name 1",
       "role": "QA",
       "type": "fix bug",
       "hours": 8,
       "user_id": 3
    },
    {
       "id": 3,
       "project_id": 2,
       "projectName": "Project Name 2",
       "role": "QB",
       "type": "flask",
       "hours": 8,
       "user_id": 3
    },
]

app.post('/log-time-sheet/user', jsonParser ,(req, res) =>{
    res.send(listNoteUsers);
})

app.post('/log-time-sheet/user/project', jsonParser ,(req, res) =>{
    res.send(
        {
            "project_id": req.body.project_id,
            "projectName": "Change the world",
            "userLog": [
                {
                    "log_time_sheet_id": 6,
                    "role": "QA",
                    "type": "fix bug",
                    "hours": 8,
                    "user_id": 1,
                    "username": "admin@gmail.com"
                },
                {
                    "log_time_sheet_id": 11,
                    "role": "QA",
                    "type": "fix bug",
                    "hours": 8,
                    "user_id": 1,
                    "username": "admin@gmail.com"
                }
            ]
        }
    );
})

app.listen(3000, () => console.log('Server is running.......'));