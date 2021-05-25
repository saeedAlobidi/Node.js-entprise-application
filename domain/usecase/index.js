const userUseCase  = require( './User')
const userRepository  = require( '../repository')
 

let user=userUseCase(userRepository.user)
   
const usersCommenttService = Object.freeze({
    user
})

module.exports= usersCommenttService
