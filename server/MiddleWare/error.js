
//const log from '../../log'
const Constraints =require( '../../Constraints')

//TODO: There some stuff miss
function error(error, req, res, next) {

    ///DOTO: log some datat
console.log("error_Seeed "+error);
    res.status(Constraints.status.ERROR);
}


module.exports= { error };