module.exports = function (app) {
    const Usuario = app.models.user
    const ctrl = {
        index: function (req, res) {
            res.render('user/index')
        },
        cadastrar: function (req, res) {
            const user = new Usuario()
            user.nome = req.body.nome
            user.idade = req.body.idade
            user.senha = req.body.senha
            user.sexo = req.body.sexo
            user.save(function (error, user) {
                res.json(user)
            })
        },
        alterar: function (req, res) {
            const query = {
                _id: req.params.id
            }
            const update = {
                $set: {
                    nome: req.body.nome,
                    idade: req.body.idade,
                    senha: req.body.senha,
                    sexo: req.body.sexo
                }
            }
            Usuario.update(query, update,
                function (error, user) {
                    res.json(user)
                })
        },
        listarUm: function (req, res) {
            const query = {
                _id: req.params.id
            }
            const retorno = {
                nome: 1,
                idade: 1,
                sexo: 1
            }

            Usuario.findOne(query, retorno, function (err, usuario) {
                res.json(usuario)
            })
        },
        listar: function (req, res) {
            Usuario.find(function (err, usuario) {
                res.json(usuario)
            })
        },
        excluir: function (req, res) {
            const query = {
                _id: req.params.id
            }
            Usuario.remove(query, function (err, result) {
                res.json(result)
            })
        }
    }
    return ctrl;
}
