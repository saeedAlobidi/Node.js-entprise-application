
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



    return db.PreparedStatement("select * from users where Id=@v0", ['1'])
  }
  return { addUser, updateUser, getAllUser };

}