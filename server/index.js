const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send('Server running...........'));

EMAIL = 'a@gmail.com';
PASSWORD = '123';
app.post('/login', jsonParser ,(req, res) =>{
    
    console.log(req.body.email);
    console.log(req.body.password);
    if(req.body.email == EMAIL && req.body.password == PASSWORD){
        res.send({
            status: 'success',
            token: 'no null'
        });
    }
    else{
        res.send({
            status: 'fail',
            token: 'null'
        });
    }
})

app.post('/register', jsonParser ,(req, res) =>{
    res.send({
        status: 'success'
    });
})

app.post('/create-project', jsonParser ,(req, res) =>{
    res.send({
        status: 'success',
        project_id: '',
        project_name: '',
        pm_name: '',
        customer_name: '',
        technology: '',
        discription: ''
    });
})

const listProject = [
    {project_name: 'Project Name 1', project_id: '1'},
    {project_name: 'Project Name 2', project_id: '2'},
    {project_name: 'Project Name 3', project_id: '3'},
    {project_name: 'Project Name 4', project_id: '4'},
    {project_name: 'Project Name 5', project_id: '5'},
    {project_name: 'Project Name 6', project_id: '6'},
    {project_name: 'Project Name 7', project_id: '7'},
    {project_name: 'Project Name 8', project_id: '8'},
    {project_name: 'Project Name 9', project_id: '9'},
    {project_name: 'Project Name 10', project_id: '10'}
];

app.post('/get-project', jsonParser ,(req, res) =>{
    res.send(listProject);
})

const listUser = [
    {user_name: 'User Name 1', user_id: '1'},
    {user_name: 'User Name 2', user_id: '2'},
    {user_name: 'User Name 3', user_id: '3'},
    {user_name: 'User Name 4', user_id: '4'},
    {user_name: 'User Name 5', user_id: '5'},
    {user_name: 'User Name 6', user_id: '6'},
    {user_name: 'User Name 7', user_id: '7'},
    {user_name: 'User Name 8', user_id: '8'},
    {user_name: 'User Name 9', user_id: '9'},
    {user_name: 'User Name 10', user_id: '10'}
];

app.post('/get-user', jsonParser ,(req, res) =>{
    res.send(listUser);
})

app.post('/add-user', jsonParser ,(req, res) =>{
    res.send({
        status: 'success',
    });
})

app.post('/user/log-time-sheet', jsonParser ,(req, res) =>{
    res.send({
        status: 'success',
    });
})

app.post('/project-detail', jsonParser ,(req, res) =>{
    res.send({
        project_id: '',
        project_name: '',
        pm_name: '',
        customer_name: '',
        technology: '',
        discription: '',
        list_user:  [
            {user_name: ''},
            {user_name: ''}
        ]
    });
})

app.post('/user-project', jsonParser ,(req, res) =>{
    res.send([
        {project_id: '1' ,project_name: 'Project Name 1'},
        {project_id: '2' ,project_name: 'Project Name 2'}
    ]);
})

app.listen(3000, () => console.log('Server is running.......'));