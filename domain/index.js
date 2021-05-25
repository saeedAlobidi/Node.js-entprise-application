const userUseCase  = require( './usecase')
const userRepository  = require( './repository')
 

const doaminService = Object.freeze({
    userUseCase,
    userRepository
})


module.exports= doaminService


 