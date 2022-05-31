const express = require('express');
const { append } = require('express/lib/response');
const routes = express.Router();
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'HocSinh'
})

conn.connect(function (err,) {
    if (err) {
        throw err;
    }
});

/*Middleware*/
routes.use(express.json());
/*Middleware*/

routes.get('/getall', function (req, res) {

    let sql = "Select * from SinhVien";
    conn.query(sql, function (err, results){
        if (err) {
            throw err;
        }
        res.send(results);
    });
})

routes.get('/get', function (req, res) {

    let id = req.query.id;
    let sql = "select * from SinhVien where id = "+id+" ";
    conn.query(sql, function (err, results){
        if (err) {
            throw err;
        }
        res.send(results);
    });
})

routes.post('/add', function (req, res) {

    let student = req.body.name;
    let age = req.body.age;
    let sql = "insert into SinhVien(studentname, age) values('"+student+"', "+age+")";
    console.log(sql);
    conn.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500);
            res.send();
        }
        else
        {
            res.status(200);
            res.send();
        }
    })
})

routes.put('/update', function (req, res) {

    let student = req.body.name;
    let age = req.body.age;

    let sql = "update SinhVien set studentname = '"+student+"', age = "+age+" where id = "+id+"";

    conn.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500);
            res.send();
        }
        else
        {
            res.status(200);
            res.send();
        }
    })
})


routes.delete('/delete', function (req, res) {

    let id = req.body.id;

    let sql = "delete from SinhVien where id = "+id+"";

    conn.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500);
            res.send();
        }
        else
        {
            res.status(200);
            res.send();
        }
    })
})

module.exports = routes;