const BeltController = require('../controllers/Moviecontroller');
const userController = require('../controllers/Usercontroller');

module.exports = function(app){
    app.post('/api/project', BeltController.createMovie);
    app.get('/api/projects', BeltController.getAllMovie);
    app.get('/api/project/:id', BeltController.getMovie);
    app.put('/api/project/:id',BeltController.updateMovie);
    app.delete('/api/project/:id',BeltController.deleteMovie);
}