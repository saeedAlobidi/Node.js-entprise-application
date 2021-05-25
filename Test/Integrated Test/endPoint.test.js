const request = require('supertest')
const constants = require('../../Constraints')
let app

describe("endpoint", () => {

  beforeEach(() => { app = require('../../index'); });
  afterEach(() => { app.close() });

  describe("endpoint", () => {
    it("/Post  api/user/AddUser", async () => {
      status = constants.status.SUCCESS;
      const result = await request(app)
        .post('/api/user/AddUser')
        .send(({ Id: "1", Name: "saeed alabidi", Age: "100" }))
        .expect(status)


    });

    it("/Post  api/user/getAllUser", async () => {
      status = constants.status.SUCCESS;
      const result = await request(app)
        .post('/api/user/getAllUser')
      expect(result.body[0].Name).toEqual("saeed alabidi");
    });

  })







})



