module.exports = function (app) {

    const controle = app.controllers.index

    app.get('/', controle.index);


    /*
        get -> lista
        post -> cadastra
        put -> alterar
        delete -> deletar
    */

}
