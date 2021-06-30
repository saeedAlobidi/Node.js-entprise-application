const request = require('supertest')
const constraint = require('../../constraints')
const db = require('../../domain/database')
const jwt = require('jsonwebtoken')
let app
jest.setTimeout(30000);


describe("endpoint", () => {

  beforeEach(() => { app = require('../../index'); });
  afterEach(() => { app.close() });



  describe("endpoint", () => {
    it("/Post  api/user/AddUser", async () => {

      //1- Arrange
      status = constraint.status.SUCCESS;
      //2- Act 

      const result = await request(app)
        .post('/api/user/AddUser')
        .set('X-P-T', jwt.sign({ key: constraint.envConfig.config.KEY }, constraint.envConfig.config.KEY))
        .send({ Id: "1", Name: "saeed alabidi", Age: "100" });
      //3- Assert 
      expect(result.status).toEqual(status);
    });



    it("/Post  api/user/getAllUser", async () => {
      //1- Arrange
      status = constraint.status.SUCCESS;
      //1- Arrange
      const result = await request(app)
        .post('/api/user/getAllUser')
        .set('X-P-T', jwt.sign({ key: constraint.envConfig.config.KEY }, constraint.envConfig.config.KEY))
      //3- Assert 
      console.log("------------------",result.body)
      expect(result.body.data[0].Name).toEqual("saeed alabidi");
    });



    it("must be return 404 when db error", async () => {
      //1- Arrange
      db.dbOperation.Query = null;
      db.dbOperation.PreparedStatement = null;
      db.dbOperation.PreparedTransactionStatement = null;
      const status = constraint.status.ERROR;

      //1- Arrange
      const result = await request(app)
        .post('/api/user/getAllUser')
        .set('X-P-T', jwt.sign({ key: constraint.envConfig.config.KEY }, constraint.envConfig.config.KEY))
        //3- Assert 
        .expect(404)


    });

  })







})



