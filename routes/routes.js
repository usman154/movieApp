function Routes(app){
    var controller = require('../controller/controller.js')
    app.route('/movies')
      .get(controller.list_all_movies)
      .post(controller.create_a_movie)
    app.route('/movie/:movieId')
       .get(controller.getDetailsOfMovie)
       .put(controller.updateMovie)
       .delete(controller.deleteMovie)
}
module.exports = Routes;