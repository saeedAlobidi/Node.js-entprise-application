const jwt = require('jsonwebtoken')
const constraint = require('../../Constraints')
const config = require('../../Config')


//TODO: There some stuff miss
function headerAuth(req, res, next) {

    try {

        const publicToken = req.header('X-P-T');
        var _publicToken = jwt.verify(publicToken, config.envConfig.config.KEY)


        if (_publicToken.key == config.envConfig.config.KEY) {
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
        res.status(constraint.status.INVALID_TOKEN);
        res.end();
    }

}



module.exports = { headerAuth };