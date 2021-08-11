const Moviecontroller = require('../controllers/Moviecontroller');
const UserController = require('../controllers/Usercontroller');
const Sessioncontroller = require('../controllers/Sessioncontroller');
module.exports = function(app){
    //movie
    app.post('/api/movie', Moviecontroller.createMovie);
    app.get('/api/movies', Moviecontroller.getAllMovie);
    app.get('/api/movie/:id', Moviecontroller.getMovie);
    app.put('/api/movie/:id',Moviecontroller.updateMovie);
    app.delete('/api/movie/:id',Moviecontroller.deleteMovie);
    app.put('/api/cat/:id',Moviecontroller.addCat);
    //user
    app.post('/api/user', UserController.createUser);
    app.get('/api/users', UserController.getAllUser);
    app.get('/api/user/:id', UserController.getUser);
    app.put('/api/user/:id',UserController.updateUser);
    app.delete('/api/user/:id',UserController.deleteUser);
    //session
    app.post('/api/Session', Sessioncontroller.createSession);
    app.get('/api/Sessions', Sessioncontroller.getAllSession);
    app.get('/api/Session/:id', Sessioncontroller.getSession);
    app.put('/api/Session/:id',Sessioncontroller.updateSession);
    app.delete('/api/Session/:id',Sessioncontroller.deleteSession);
  


}