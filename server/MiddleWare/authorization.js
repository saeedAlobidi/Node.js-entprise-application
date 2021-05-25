const jwt =require('jsonwebtoken')
const constraint  =require( '../../Constraints')
const config  =require( '../../Config')


//TODO: There some stuff miss
function headerAuth(req, res, next) {

    next();
    const token = req.header('x-auth-token');

    if (!token) 
        res.status(constraint.status.ACCESS_DENIED)
       
    try {
        jwt.verify(token, config.envConfig.Key)
        next();
    } catch (error) {
        res.status(constraint.status.INVALID_TOKEN)
    }

}


module.exports= {headerAuth};