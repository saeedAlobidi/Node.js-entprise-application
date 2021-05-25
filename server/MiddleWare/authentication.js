  
const jwt =require('jsonwebtoken')


//TODO: There some stuff miss
function permission(req, res, next) {

    const token = req.header('x-auth-token');
    
    //TODO: Check user permission
        next();
}


module.exports= {permission};