
const sql  = require( 'mssql' )
const constraint  = require( '../../constraints')
const dbCore  = require( './db')

  let dbOperation=dbCore({sql,config:constraint.dbConfig.config});

const db = Object.freeze({
    dbOperation,
    
})

module.exports=db