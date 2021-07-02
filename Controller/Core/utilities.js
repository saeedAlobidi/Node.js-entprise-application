 
 
 
//------------------------------------------------------------------------------
// <auto-generated>
//   name :saeed mohammed alabidi
//  Email:saeed1adm@gmail.com
//  Phone:00967-733122038
// </auto-generated>
//------------------------------------------------------------------------------



  
const upload = require("multer")
module.exports = (() => {

    
function multerConf() {

    return {
  
        storage: upload.diskStorage({
            destination: function (req, file, cb) {
  
              
                console.log(req.path);
                cb(null, "./file-upload")
            },
            filename: async function (req, file, cb) {
                const ext = file.mimetype.split('/')[1];
                let ImageName = Date.now() + "." + ext;
                UploadName=ImageName;
            
                cb(null, ImageName);
            }
        })
  
    }
  }


 return {multerConf}
});