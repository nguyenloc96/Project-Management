const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send('Hoole'));

app.post('/login', jsonParser ,(req, res) =>{
    res.send({
        status: 'success',
        token: 'no null'
    });
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

app.post('/get-project', jsonParser ,(req, res) =>{
    res.send([
        {project_name: '', project_id: ''},
        {project_name: '', project_id: ''}
    ]);
})

app.post('/get-user', jsonParser ,(req, res) =>{
    res.send([
        {user_name: ''},
        {user_name: ''}
    ]);
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
        {project_id: '' ,project_name: ''},
        {project_id: '' ,project_name: ''}
    ]);
})

app.listen(3000, () => console.log('Server is running.......'));