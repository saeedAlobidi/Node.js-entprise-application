

//------------------------------------------------------------------------------
// <auto-generated>
//   name :saeed mohammed alabidi
//  Email:saeed1adm@gmail.com
//  Phone:00967-733122038
// </auto-generated>
//------------------------------------------------------------------------------



const middleWare = require('../server/MiddleWare')
const express = require('express')
const upload = require("multer")
const constants = require('../constraints')
const domain = require('../domain')
const router = express.Router();
const permission = require('./Core/Permission')
const controllerUtilities = require('./Core/utilities')(); 


router.post('/AddUser', permission.check("AddUser"),upload(controllerUtilities.multerConf()).single('file'), middleWare.task.asyncMiddleHandler(async (req, res) => {

     console.log(req.filecls)
     let data = await domain.useCase.user.addUser(req.body);

     res.status(constants.status.SUCCESS).send(data);

}));



router.post('/getAllUser', permission.check("getAllUser"), middleWare.task.asyncMiddleHandler(async (req, res) => {

     let data = await domain.useCase.user.getAllUser();

     res.status(constants.status.SUCCESS).send(data);

}));





module.exports = router;