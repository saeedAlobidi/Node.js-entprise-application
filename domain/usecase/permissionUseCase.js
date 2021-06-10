
const businessRoles  = require( '../../entities')

module.exports=function makePermissionUseCase (permissionRepository ) {
    
      async function getAllPermission ({userId}) {  
         
         return permissionRepository.getAllPermission();
          //TODO: Write ur step
                 
       }
       
          
    return {getAllPermission};

  }