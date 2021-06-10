function async(callback) {

    return async (req, res, next) => {
        try {

            await callback(req, res);
        } catch (error) {
            next(error);
        }

    };

}


function asyncHandler(callback) {

    return async (object) => {
        try {
            await callback(object);
        } catch (error) {
            //Todo: log  

        }

    };

}
module.exports = { async, asyncHandler };