const Moviecontroller = require('../controllers/Moviecontroller');
const UserController = require('../controllers/Usercontroller');
const Timecontroller = require('../controllers/Timecontroller');
const Hallcontroller = require('../controllers/Hallcontroller');
const Categorycontroller = require('../controllers/Categorycontroller');
module.exports = function(app){
    //movie
    app.post('/api/movie', Moviecontroller.createMovie);
    app.get('/api/movies', Moviecontroller.getAllMovie);
    app.get('/api/movie/:id', Moviecontroller.getMovie);
    app.put('/api/movie/:id',Moviecontroller.updateMovie);
    app.delete('/api/movie/:id',Moviecontroller.deleteMovie);
    //user
    app.post('/api/user', UserController.createUser);
    app.get('/api/users', UserController.getAllUser);
    app.get('/api/user/:id', UserController.getUser);
    app.put('/api/user/:id',UserController.updateUser);
    app.delete('/api/user/:id',UserController.deleteUser);
    //time
    app.post('/api/time', Timecontroller.createTime);
    app.get('/api/times', Timecontroller.getAllTime);
    app.get('/api/time/:id', Timecontroller.getTime);
    app.put('/api/time/:id',Timecontroller.updateTime);
    app.delete('/api/time/:id',Timecontroller.deleteTime);
    //Hall
    app.post('/api/hall', Hallcontroller.createHall);
    app.get('/api/halls', Hallcontroller.getAllHall);
    app.get('/api/hall/:id', Hallcontroller.getHall);
    app.put('/api/hall/:id',Hallcontroller.updateHall);
    app.delete('/api/hall/:id',Hallcontroller.deleteHall);
    //Category
    app.post('/api/category', Categorycontroller.createCategory);
    app.get('/api/categories', Categorycontroller.getAllCategory);
    app.get('/api/category/:id', Categorycontroller.getCategory);
    app.put('/api/category/:id',Categorycontroller.updateCategory);
    app.delete('/api/category/:id',Categorycontroller.deleteCategory);


}