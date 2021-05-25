module.exports= function makeDb ({sql, config }) {
    
    async function Query(commands) {
       
        let pool,result1 ;
        try { 
 
            
             pool = await new sql.ConnectionPool(config.dbConfig.config).connect();
             result1 = await pool.request() .query(commands)  ; 

        } catch (err) { 
           console.log("error===>"+err.message)
            await pool.close()
        } finally {
            await pool.close();
            return await result1.recordsets[0];

        }
    }
 

    return {Query}; 
  }




  