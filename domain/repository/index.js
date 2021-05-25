 const userRepository  = require( './User' )
const db  = require( '../../database')

 
 let user=userRepository(db.dbOperation)

const repository = Object.freeze({
    user,
    
})

module.exports= repository
 