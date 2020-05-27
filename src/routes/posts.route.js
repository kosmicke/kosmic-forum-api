const postsController = require("../controllers/posts.controller")
const { authorize } = require("../controllers/authentication.controller")

module.exports = (app) => {
    
    app.route('/posts')
        .post(authorize, postsController.create)
        .get(authorize, postsController.list)

    app.route('/posts/:id')
        .put(authorize, postsController.edit)
        .delete(authorize, postsController.remove)

    app.route('/posts/:id/likes')
        .get(authorize, postsController.getLikes)
        .post(authorize, postsController.like)
        
}