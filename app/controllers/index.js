module.exports = function (app) {
    const ctrl = {
        index: function (req, res) {
            res.render('index')
        }
    }
    return ctrl;
}
