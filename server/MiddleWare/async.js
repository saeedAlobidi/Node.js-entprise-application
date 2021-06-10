function asyncMiddleHandler(callback) {

    return async (req, res, next) => {
        try {

            await callback(req, res,next);
        } catch (error) {
            next(error);
        }

    };

}

function MiddleHandler(callback) {

    return  (req, res, next) => {
        try {

              callback(req, res,next);
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


 
function Handler(callback) {

    return  (object) => {
        try {
              callback(object);
        } catch (error) {
            //Todo: log  

        }

    };

}

module.exports = { asyncMiddleHandler, MiddleHandler ,asyncHandler,Handler};