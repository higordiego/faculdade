module.exports = function (app) {
    const controle = app.controllers.user


    app.get('/user', controle.index)

    app.post('/user', controle.cadastrar)

    app.get('/user/listar', controle.listar)

    app.get('/user/listarUm/:id', controle.listarUm)

    app.put('/user', controle.alterar)

    app.delete('/user', controle.excluir)

    /*
        get -> lista
        post -> cadastra
        put -> alterar
        delete -> deletar
    */

}
