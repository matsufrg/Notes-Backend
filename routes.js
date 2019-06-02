var express = require('express');

const TagController = require('./controllers/TagController');
const TrashController = require('./controllers/TrashController');

var routes = express.Router();

//  Note CRUD

routes.post('/tags', TagController.store);

routes.put('/tags/:id', TagController.updateTag);

routes.delete('/tags/:id', TrashController.deleteTag);

routes.get('/tags', TagController.show);

routes.get('/deleted', TrashController.showDeleted);

routes.delete('/deleted/:id', TrashController.deleteFromTrash);

routes.get('/deleted/:id', TrashController.showOneDeleted);

routes.put('/deleted/:id', TrashController.updateFromTrash);

routes.get('/tags/:id', TagController.showOne);

module.exports = routes;