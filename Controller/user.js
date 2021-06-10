const middleWare  = require( '../server/MiddleWare')
const express  = require( 'express')
const constants  = require( '../Constraints')
const domain  = require( '../domain')
const router = express.Router();
 

router.post('/AddUser', middleWare.authorization.permission,middleWare.task.asyncMiddleHandler(async(req, res) => {
     let  data = await domain.useCase.user.addUser(req.body); 
    status=constants.status.SUCCESS;
     res.status(status).send(data);
//use case 
}));

router.post('/getAllUser', middleWare.authorization.permission,middleWare.task.asyncMiddleHandler(async(req, res) => {
  
    let  data = await domain.useCase.user.getAllUser();
    status=constants.status.SUCCESS; 
     res.status(status).send(data);
//use case 
}));




module.exports=router;