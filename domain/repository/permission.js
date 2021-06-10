
module.exports= function makePermissionRepository (db) { 
  
    async function getAllPermission () {  
      
      //TODO:  get permission
     return  db.Query("ur query");  

     
   } 
    return {getAllPermission};

  }