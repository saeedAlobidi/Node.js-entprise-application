module.exports = function makeDb({ sql, config }) {



    async function Query(commands) {
        const pool = await new sql.ConnectionPool(config).connect();
        const result1 = await pool.request().query(commands);
        await pool.close()
        return await result1.recordsets[0];
    }


    async function PreparedStatement(query, values) {


        const pool = await new sql.ConnectionPool(config).connect();
        const request = pool.request();
        values.forEach((val, index) => { request.input(`v${index}`, sql.VarChar(1000), val) });

        const result1 = await request.query(query);
        await pool.close()

        return await result1.recordsets[0];
    }


    async function transaction() {
        const pool = await new sql.ConnectionPool(config).connect();
        const transaction = new sql.Transaction(pool);
        return new Promise((Resolve) => transaction.begin(() => { Resolve({ transaction: transaction }) }));



    }


    function PreparedTransactionStatement(transaction) {


        return {
            excute: async (query, values) => {

                try {
                    const request = new sql.Request(transaction);
                    values.forEach((val, index) => { request.input(`v${index}`, sql.VarChar(1000), val) });
                    const result1 = await request.query(query);
                    return await result1.recordsets[0];

                } catch (error) {
                    console.log("error", error);

                    await pool.close()
                    transaction.rollback(() => { });
                }

            }
        }
    }



    function transactionCommit(transaction) {
        transaction.commit(() => { });
    }



    return { Query, PreparedStatement, transaction, PreparedTransactionStatement, transactionCommit };
}




