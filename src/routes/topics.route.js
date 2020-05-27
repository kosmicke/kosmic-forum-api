const topicsController = require("../controllers/topics.controller")
const { authorize } = require("../controllers/authentication.controller")

module.exports = (app) => {
    
    app.route('/topics')
        .post(authorize, topicsController.create)
        .get(authorize, topicsController.list)

    app.route('/topics/:id')
        .get(authorize, topicsController.getById)
        .put(authorize, topicsController.edit)
        .delete(authorize, topicsController.remove)

    app.route('/topics/:id/likes')
        .get(authorize, topicsController.getLikes)
        .post(authorize, topicsController.like)
        
}