
/**
 * 
 * here u can write  ur Business Roles
 */
  



module.exports= function buildUser () {

     function makeUser ({
      Id,
      Name ,
      Age ,
      DateCreated=Date.now()
    } = {}) {
      
      if (Name.length<=0) {
        throw new Error("User Name must be not empty")
      }
      if (Age<=0) {
        throw new Error('Age must be bigger than 0')
      }
       
      
      return Object.freeze({
         Id,
         Name,
          Age,
         DateCreated,
        
       
      }) 
    }
          
    
    return {makeUser};
        
  }