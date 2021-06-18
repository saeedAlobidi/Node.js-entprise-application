const Repository  = require( '../repository')
const permissionUseCase  = require( './permissionUseCase')
const userUseCase  = require( './User')
const serices=require('../../services');

let user=userUseCase({usersRepository:Repository.user,serices:serices})
let permission=permissionUseCase(Repository.permission)
   
const usersCommenttService = Object.freeze({
    user,permission
})

module.exports= usersCommenttService
