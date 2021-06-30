
const jwt = require('jsonwebtoken')
const constraint = require('../../Constraints')
const date = require('date-and-time');

module.exports = (() => {
  function EncrptJwt(data) { 
      return jwt.sign(data, constraint.envConfig.config.KEY); 
  }


  function DecrptJwt(data) {  
      return jwt.verify(data, constraint.envConfig.config.KEY);  
  }


  


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  
  function getTime() { 
    const now = new Date();
     
    return  date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
  }
 

  return { EncrptJwt, DecrptJwt,validateEmail,getTime }

})();

