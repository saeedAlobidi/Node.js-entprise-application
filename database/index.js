
const sql  = require( 'mssql' )
const config  = require( '../Config')
const dbCore  = require( './Db')


 let dbOperation=dbCore({sql,config});

const db = Object.freeze({
    dbOperation,
    
})

module.exports=db
