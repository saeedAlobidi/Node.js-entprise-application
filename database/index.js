
const sql  = require( 'mssql' )
const constraint  = require( '../Constraints')
const dbCore  = require( './Db')

  let dbOperation=dbCore({sql,config:constraint.dbConfig.config});

const db = Object.freeze({
    dbOperation,
    
})

module.exports=db
