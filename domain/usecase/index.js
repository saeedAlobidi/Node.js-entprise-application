const Repository  = require( '../repository')
const permissionUseCase  = require( './permissionUseCase')
const userUseCase  = require( './User')
  

let user=userUseCase(Repository.user)
let permission=permissionUseCase(Repository.permission)
   
const usersCommenttService = Object.freeze({
    user,permission
})

module.exports= usersCommenttService
