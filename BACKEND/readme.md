Code is in working condition
The utilities are basically middlewares that we have used at different stages. A middleware is a middle man kind of stuff which will first check a certain condition beofre sednding the req to the backend server.We can use mutliple middlewares at a particular step . The backend server mainly accepts (err,req,res,next) these 4 params out of which err is for errors received, req is the req sent from frontend, res is the response to be send to the frontend and next will actually loop the whole process of passing through multiple middlewares until a res is received.it is not a key word but a flag.
API ERROR MODULE ::
we have used the error class of node js in the api error module of the utilities
changes were made