const entity = require('../../entities')
const repository = require('../../domain/repository')
const usecase = require('../../domain/usecase')

const db = require('../../domain/database')
describe("Enitiy", () => {

    it("check business recquitment  and return same object", () => {


        var usre = entity.user.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" }).data
        expect({ Id: usre.Id, Name: usre.Name, Age: usre.Age }).toMatchObject({ Id: "1", Name: "saeed alabidi", Age: "28" });


    });


    it("with  empty name return message (User Name must be not empty)", () => {

 
        //1- Arrange
        let data={ Id: "1", Name: "", Age: "28" };

        //Act
        let user =entity.user.makeUser(data) 
        
         //Assert
        expect(user.message).toEqual("User Name must be not empty");


    });



    it("with  empty name return message (Age must be bigger than 0)", () => {

 
        //1- Arrange
        let data={ Id: "1", Name: "", Age: "0" };

        //Act
        let user =entity.user.makeUser(data) 
        
        //Assert
        expect(user.message).toEqual("User Name must be not empty");

         

    });




})



describe("repository", () => {

    it("save user object  return true", () => {

 
        //1- Arrange
        db.dbOperation.Query = jest.fn(() => Promise.resolve(true));

        //Act
        var usreEnitiy = entity.user.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" })
        
         //Assert
         repository.user.addUser(usreEnitiy.data).then((e) => {
            expect(e).toEqual(true);

        }); 

    });


    it("update user object  return true", () => {

        //1- Arrange
        db.dbOperation.Query = jest.fn(() => Promise.resolve(true));

        //Act
        var usreEnitiy = entity.user.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" })
        
         //Assert
         repository.user.updateUser(usreEnitiy.data).then((e) => {
            expect(e).toEqual(true);

        }); 

         

    });






})


describe("usecase", () => {

    it("save user object  return true", () => {

        //1- Arrange
        db.dbOperation.Query = jest.fn(() => Promise.resolve(true));

        //Act
        var usreEnitiy = entity.user.makeUser({ Id: "1", Name: "saeed alabidi", Age: "28" })
        
         //Assert
         usecase.user.addUser(usreEnitiy.data).then((e) => {
            expect(e).toEqual(true);

        }); 

         
 

    });

 


})