const router = require("express").Router();

/**
 * @swagger
 * /world:
 *    get:
 *      tags:
 *        - World
 *      summary: Determines if the service is in a healthy state
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: The service is in a healthy state
 */
router.get("/world/", (req, res) =>
    res.send({ message: "The service is operating correctly." })
);

/**
 * @swagger
 * tags:
 *   - name: World
 *     description: Health check endpoint
 */
module.exports = router;
