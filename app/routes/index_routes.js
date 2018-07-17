module.exports = function(application) {
    application.get('/', function(req, res) {
        application.app.controllers.index_controllers.home(application, req, res);
    });

}