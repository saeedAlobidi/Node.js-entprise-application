const request = require('supertest')
const constants = require('../../Constraints')
const config  =require( '../../Config')
const db  =require( '../../database')
const jwt =require('jsonwebtoken')

let app

describe("endpoint", () => {
  jest.setTimeout(30000);

  beforeEach(() => { app = require('../../index'); });
  afterEach(() => { app.close() });

  describe("endpoint", () => {
    it("/Post  api/user/AddUser", async () => {
      //console.log(jwt.sign({ key:config.envConfig.config.KEY }, config.envConfig.config.KEY))
       status = constants.status.SUCCESS;
       const result = await request(app)
        .post('/api/user/AddUser')
        .set('X-P-T', jwt.sign({ key:config.envConfig.config.KEY }, config.envConfig.config.KEY)) 
        .send({ Id: "1", Name: "saeed alabidi", Age: "100" })
        .expect(status)


    });

    it("/Post  api/user/getAllUser", async () => {
      status = constants.status.SUCCESS;
      const result = await request(app)
        .post('/api/user/getAllUser')
        .set('X-P-T', jwt.sign({ key:config.envConfig.config.KEY }, config.envConfig.config.KEY)) 

      expect(result.body[0].Name).toEqual("saeed alabidi");
    });


    it("must be return 404 when db error", async () => {
      db.dbOperation.Query =null;

      const status = constants.status.ERROR;
    
      const result = await request(app)
        .post('/api/user/getAllUser')
        .set('X-P-T', jwt.sign({ key:config.envConfig.config.KEY }, config.envConfig.config.KEY)) 

        .expect(404)

        
    });

  })







})



