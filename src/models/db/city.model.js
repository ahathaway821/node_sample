/**
 * @swagger
 * definitions:
 *   CityResponse:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       countrycode:
 *         type: string
 *       name:
 *         type: string
 *       district:
 *         type: string
 *       population:
 *         type: integer
 *   CityRequest:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       countrycode:
 *         type: string
 *       name:
 *         type: string
 *       district:
 *         type: string
 *       population:
 *         type: integer
 */
module.exports = (sequelize, DataTypes) => {
    var City = sequelize.define('City', {
        id: { type: DataTypes.INTEGER, primaryKey: true},
        countrycode: DataTypes.STRING,
        name: DataTypes.STRING,
        district: DataTypes.STRING,
        population: DataTypes.INTEGER
    }, {
       tableName: 'city'
    });

    return City;
  };