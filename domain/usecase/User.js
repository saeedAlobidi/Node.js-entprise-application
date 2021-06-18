
const businessRoles  = require( '../../entities')

module.exports=function makeUserUseCase ({usersRepository,serices} ) {
    
      async function addUser (usertInfo) {  
         
           const user = businessRoles.makeUser(usertInfo)   
           
            return  await usersRepository.addUser(user); 
                 
       }
       async function getAllUser () {  
          
          
           return  await usersRepository.getAllUser(); 
                
      }

 
    return {addUser,getAllUser};

  }