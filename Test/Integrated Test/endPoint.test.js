const request = require('supertest')
const constraint = require('../../constraints')
 const db  =require( '../../domain/database')
const jwt =require('jsonwebtoken')

let app

describe("endpoint", () => {
  jest.setTimeout(30000);

  beforeEach(() => { app = require('../../index'); });
  afterEach(() => { app.close() });

  describe("endpoint", () => {
    it("/Post  api/user/AddUser", async () => {
       status = constraint.status.SUCCESS;
       const result = await request(app)
        .post('/api/user/AddUser')
        .set('X-P-T', jwt.sign({ key:constraint.envConfig.config.KEY }, constraint.envConfig.config.KEY)) 
        .send({ Id: "1", Name: "saeed alabidi", Age: "100" })
        .expect(status)


    }); 
    
    it("/Post  api/user/getAllUser", async () => {
      status = constraint.status.SUCCESS;
      const result = await request(app)
        .post('/api/user/getAllUser')
        .set('X-P-T', jwt.sign({ key:constraint.envConfig.config.KEY }, constraint.envConfig.config.KEY)) 

      expect(result.body[0].Name).toEqual("saeed alabidi");
    });


    it("must be return 404 when db error", async () => {
      db.dbOperation.Query =null;
      db.dbOperation.PreparedStatement =null;
      db.dbOperation.PreparedTransactionStatement =null;

      const status = constraint.status.ERROR;
    
      const result = await request(app)
        .post('/api/user/getAllUser')
        .set('X-P-T', jwt.sign({ key:constraint.envConfig.config.KEY }, constraint.envConfig.config.KEY)) 

        .expect(404)

        
    });

  })







})



