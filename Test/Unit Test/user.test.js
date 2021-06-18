const entity =require( '../../entities') 
const repository =require('../../domain/repository') 
const usecase =require('../../domain/usecase') 

const db  =require( '../../domain/database')
describe("Enitiy", () => {

    it("send user object and return same object", () => {


        var usre = entity.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" })
        expect({ Id: usre.Id, Name: usre.Name, Age: usre.Age }).toMatchObject({ Id: "1", Name: "saeed alabidi", Age: "28" });


    });


    it("send empty name  throw exception", () => {



        expect(() => { entity.makeUser({ Id: "1", Name: "", Age: "28" }) }).toThrow("User Name must be not empty");


    });



    it("send age equal 0 throw exception", () => {



        expect(() => { entity.makeUser({ Id: "1", Name: "saeed alabidi", Age: "0" }) }).toThrow("Age must be bigger than 0");


    });




})
 


describe("repository", () => {

    it("save user object  return true", () => {

        db.dbOperation.Query = jest.fn(() => Promise.resolve(true));
     
        var usreEnitiy = entity.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" })
        repository.user.addUser(usreEnitiy).then((e) => {
            expect(e).toEqual(true);

        });

    });


    it("update user object  return true", () => {

        db.dbOperation.Query = jest.fn(() => Promise.resolve(true));
        var usreEnitiy = entity.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" })
        repository.user.updateUser(usreEnitiy).then((e) => {
            expect(e).toEqual(true);

        });

    });






})

  
describe("usecase", () => {

    it("save user object  return true", () => {

        db.dbOperation.Query = jest.fn(() => Promise.resolve(true));
        var usreEnitiy = entity.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" }) 
 
        usecase.user.addUser(usreEnitiy).then((e) => {
            expect(e).toEqual(true);

        });

    });
 

   it("save user object  return true", () => {

        db.dbOperation.Query = jest.fn(() => Promise.resolve(true));
        var usreEnitiy = entity.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" }) 
 
        usecase.user.addUser(usreEnitiy).then((e) => {
            expect(e).toEqual(true);

        });

    });
 


})