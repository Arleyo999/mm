const auth = require('../../auth');

module.exports = function chequearAuth() {
    function middleware(req, res, next){
        const id= req.body.id; // es para hacer lo de autorizacion con id para q se pueda entar solo si se es dueño de la pagina o luugar
        auth.chequearToken.confirmarToken(req, id)
        next();
    }
    return middleware 
}