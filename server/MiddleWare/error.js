
//const log from '../../log'
const Constraints =require( '../../Constraints')

//TODO: There some stuff miss
function error(error, req, res, next) {

    ///DOTO: log some datat
console.log("error_Seeed  code: "+Constraints.status.ERROR+" message:  "+error.message);
    res.status(Constraints.status.ERROR).send(error.message);
}


module.exports= { error };