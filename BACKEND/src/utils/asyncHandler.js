//wrapper function
const asyncHandler = (requestHandler) => {
    async (req,res,next) => {
        try{
            await requestHandler(req,res,next)
        }//basuc syntax to catch error. here we first catch where the error is and send the status code . incase of any error for the json we have used the .json code
        catch(error) {
            res.send(err.code || 500).json({
                success : false,
                message : err.message
            })
        }

    }
    return requestHandler
}

export {asyncHandler}

//same code written using promises
// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }


// export { asyncHandler }


