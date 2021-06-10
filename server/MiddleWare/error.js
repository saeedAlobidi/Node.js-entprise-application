
//const log from '../../log'
const constraint =require( '../../Constraints')

//TODO: There some stuff miss
function error(error, req, res, next) {

    ///DOTO: log some datat
console.log("Error(error.js) => : "+constraint.status.ERROR+" message:  "+error.message);
    res.status(constraint.status.ERROR).send(error.message);
}


module.exports= { error };