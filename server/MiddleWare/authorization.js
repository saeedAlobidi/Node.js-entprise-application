const jwt = require('jsonwebtoken')
const constraint = require('../../Constraints')
const domain = require('../../domain')


function headerAuth(req, res, next) {

    try {

        const publicToken = req.header('X-P-T');
        var _publicToken = jwt.verify(publicToken, constraint.envConfig.config.KEY)


        if (_publicToken.key == constraint.envConfig.config.KEY) {
            console.log("is authorization person")
            next()
        }
        else {
            console.log("is not authorization person")
            res.status(constraint.status.INVALID_TOKEN);
            res.end();
        }

    } catch (error) {
        console.log("authorization", error);
        res.status(constraint.status.INVALID_TOKEN).send("is not authorization person").end();
        
    }

}




//TODO: There some stuff miss
async function permission(req, res, next) { 
 
    if (req.header('sign_in') != null && req.header('sign_in') != undefined && req.header('sign_in')=="1" && req.header('X-U-T')!=null) {
        const userToken = req.header('X-U-T');
        var allowAccess = await domain.useCase.permission.getAllPermission(userToken);
        allowAccess? next():res.status(constraint.status.ACCESS_DENIED).send("is not authorization person").end();
            
    }else{
     
      next()
    }

}



module.exports = { headerAuth, permission };