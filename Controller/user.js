const MiddleWare  = require( '../server/MiddleWare')
const express  = require( 'express')
const constants  = require( '../Constraints')
const domain  = require( '../domain')
const router = express.Router();
 

router.post('/AddUser',MiddleWare.authentication.permission,MiddleWare.asyncMiddleware.asyncMiddleware(async(req, res) => {
     let  data = await domain.userUseCase.user.addUser(req.body);
    
    status=constants.status.SUCCESS;
     res.status(status).send(data);
//use case 
}));

router.post('/getAllUser',MiddleWare.authentication.permission,MiddleWare.asyncMiddleware.asyncMiddleware(async(req, res) => {
  
    let  data = await domain.userUseCase.user.getAllUser();
    status=constants.status.SUCCESS; 
     res.status(status).send(data);
//use case 
}));




module.exports=router;