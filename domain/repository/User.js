
module.exports = function makeUserRepository(db) {


  async function addUser(user) {


    //TODO: this function not compeleted
    return db.PreparedStatement("INSERT INTO [dbo].[Users] ([Name] ,[Age] ,[DateCreated])VALUES(@v0,@v1,@v2)", [user.Name, user.Age, user.DateCreated]);

  }
  async function updateUser(user) {

    //TODO: this function not compeleted
    return db.Query("");


  }
  async function getAllUser() {

    let  statement=null;
    let  statement2=null;
     await db.transaction().then(async(t)=>{ 

        statement=await db.PreparedTransactionStatement(t.transaction).excute("select * from users where Id=@v0 and Name=@v1", ['1','saeed alabidi'])
        statement2=await db.PreparedTransactionStatement(t.transaction).excute("select * from users where Id=@v0 and Name=@v1", ['1','saeed alabidi'])
         await db.transactionCommit(t.transaction); 


    });
   return  statement
  }
  return { addUser, updateUser, getAllUser };

}