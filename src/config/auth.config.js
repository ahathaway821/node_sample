var expressJwt = require("express-jwt");
var { ErrorType, HandledError } = require("../errors/error.model");

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
                        "/auth/authenticate",
                        "/world"
                    ]
                })
            );

            app.use((err, req, res, next) => {
                if (err.name === "UnauthorizedError") {
                    next(
                        new HandledError(ErrorType.SECURITY, ERROR_MESSAGE, err)
                    );
                }
            })

            resolve(app);
        } catch(err) {
            reject(err);
        }
    });