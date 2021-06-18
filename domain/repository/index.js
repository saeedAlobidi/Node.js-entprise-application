 const userRepository  = require( './User' )
 const permissionRepository  = require( './permission' )
 const db  = require( '../database')

 
 let user=userRepository(db.dbOperation)
 let permission=permissionRepository(db.dbOperation)

const repository = Object.freeze({
    user,permission
    
})

module.exports= repository
 