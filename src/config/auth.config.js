var expressJwt = require("express-jwt");
var { ErrorType, HandleError } = require("../errors/error.model");

const ERROR_MESSAGE = "You do not have permission ot access this resources.";

module.exports = app =>
    new Promise((resolve, reject) => {
        try {
            app.use(
                expressJwt({secret: process.env.JWT_SECRET }).unless({
                    path: [
                        "/swagger.json",
                        "/exampleerror",
                        "/health",
                        "/auth/authenticate"
                    ]
                })
            );

            app.use((err, req, res, next) => {
                if (err.name == "UnathorizedError") {
                    next(
                        new HandleError(ErrorType.SECURITY, ERROR_MESSAGE, err)
                    );
                }
            })

            resolve(app);
        } catch(err) {
            reject(err);
        }
    });