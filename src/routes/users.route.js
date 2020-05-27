const usersController = require("../controllers/users.controller")
const { authorize } = require("../controllers/authentication.controller")

module.exports = (app) => {
    app.route('/users/:search')
        .get(authorize, usersController.getByParam)
        
}