var _service = require("../services/world.service");
const router = require("express").Router();

/**
 * @swagger
 * /world/countries:
 *    get:
 *      tags:
 *        - World
 *      summary: Gets a list of all countries
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of countries
 */
router.get("/world/countries", (req, res, next) =>
    _service
        .listCountries()
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * /world/countries/{id}:
 *    get:
 *      tags:
 *        - World
 *      summary: Reads a single country model by id
 *      description: Returns a single of country model
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Country model's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: An single country model
 *              schema:
 *                $ref: '#/definitions/CountryResponse'
 */
router.get("/world/countries/:id", (req, res, next) =>
    _service
        .readCountries(req.params.id)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * /world/countries:
 *    post:
 *      tags:
 *        - World
 *      summary: Creates and stores a country model
 *      description: Returns a list of country models
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Country object
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/CountryRequest'
 *      responses:
 *          201:
 *              description: Successfully created
 */
router.post("/world/countries", (req, res, next) =>
    _service
        .createCountry(req.body)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * /world/cities/{id}:
 *    get:
 *      tags:
 *        - World
 *      summary: Reads a single country model by id
 *      description: Returns a single of country model
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Country model's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: An single country model
 *              schema:
 *                $ref: '#/definitions/CityResponse'
 */
router.get("/world/cities/:id", (req, res, next) =>
    _service
        .readCities(req.params.id)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * /world/cities:
 *    post:
 *      tags:
 *        - World
 *      summary: Creates and stores a country model
 *      description: Returns a list of country models
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Country object
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/CityRequest'
 *      responses:
 *          201:
 *              description: Successfully created
 */
router.post("/world/cities", (req, res, next) =>
    _service
        .createCity(req.body)
        .then(data => res.send(data))
        .catch(next)
);

/**
 * @swagger
 * tags:
 *   - name: World
 *     description: Endpoints for country and city crud operations
 */
module.exports = router;
