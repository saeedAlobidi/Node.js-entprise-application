module.exports = function makeDb({ sql, config }) {

    async function Query(commands) {


        let pool = await new sql.ConnectionPool(config.dbConfig.config).connect();
        let result1 = await pool.request().query(commands);
        await pool.close()
        return await result1.recordsets[0];
    }


    return { Query };
}




