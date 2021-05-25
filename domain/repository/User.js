
module.exports= function makeUserRepository (db) {
  
 
    async function addUser (user) { 
      
     
      //TODO: this function not compeleted
        return  db.Query("INSERT INTO [dbo].[Users] ([Name] ,[Age] ,[DateCreated])VALUES('"+user.Name+"','"+user.Age+"','"+user.DateCreated+"')");  

    }  
    async function updateUser (user) {  
      
       //TODO: this function not compeleted
      return  db.Query("");  

      
    } 
    async function getAllUser () {  
      
      //TODO: this function not compeleted
     return  db.Query("select * from [dbo].[Users]");  

     
   } 
    return {addUser,updateUser,getAllUser};

  }