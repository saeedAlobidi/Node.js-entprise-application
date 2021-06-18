module.exports = function makeDb({ sql, config }) {


  
    async function Query(commands) {
        let pool = await new sql.ConnectionPool(config).connect();
        let result1 = await pool.request().query(commands);
        await pool.close()
        return await result1.recordsets[0];
    }


    async function PreparedStatement(query, values) {


        let pool = await new sql.ConnectionPool(config).connect();
        let request = pool.request();
        values.forEach((val, index) => { request.input(`v${index}`, sql.VarChar(1000), val) });

        let result1 = await request.query(query);
        await pool.close()

        return await result1.recordsets[0];
    }

    return { Query, PreparedStatement};
}




