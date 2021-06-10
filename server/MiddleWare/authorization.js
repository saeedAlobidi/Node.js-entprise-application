const jwt = require('jsonwebtoken')
const constraint = require('../../Constraints')
const domain = require('../../domain')
const middleWare = require('../../server/MiddleWare')


function headerAuth(req, res, next) {
    const publicToken = req.header('X-P-T');
    const _publicToken = jwt.verify(publicToken, constraint.envConfig.config.KEY)
    const result = _publicToken.key == constraint.envConfig.config.KEY;
    result?console.log("is authorization person"): console.log("is not authorization person");
    result? next() : res.status(constraint.status.INVALID_TOKEN).end();
}




//TODO: There some stuff miss
async function permission(req, res, next) {

    const result= (req.header('sign_in') != null && req.header('sign_in') != undefined && req.header('sign_in') == "1" && req.header('X-U-T') != null);
    
    result?await domain.useCase.permission.getAllPermission(req.header('X-U-T'))?
     next()
    : res.status(constraint.status.ACCESS_DENIED).send("is not authorization person").end()
    : next() 

}



module.exports = { headerAuth, permission };