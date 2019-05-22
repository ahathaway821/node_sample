/**
 * @swagger
 * definitions:
 *   CountryResponse:
 *     type: object
 *     properties:
 *       code:
 *         type: string
 *       name:
 *         type: string
 *       continent:
 *         type: string
 *   CountryRequest:
 *     type: object
 *     properties:
 *       code:
 *         type: string
 *       name:
 *         type: string
 *       continent:
 *         type: string
 *       region:
 *         type: string
 *       surfacearea:
 *         type: number
 *       indepyear:
 *         type: integer
 *       population:
 *         type: integer
 *       lifeexpectancy:
 *         type: number
 *       gnp:
 *         type: number
 *       gnpold:
 *         type: number
 *       localname:
 *         type: string
 *       governmentform:
 *         type: string
 *       headofstate:
 *          type: string
 *       capital:
 *          type: integer
 *       code2:
 *          type: string
 */
module.exports = (sequelize, DataTypes) => {
    var Country = sequelize.define('Country', {
        code: { type: DataTypes.STRING, primaryKey: true },
        name: DataTypes.STRING,
        continent: DataTypes.STRING,
        region: DataTypes.STRING,
        surfacearea: DataTypes.FLOAT,
        indepyear: DataTypes.INTEGER,
        population: DataTypes.INTEGER,
        lifeexpectancy: DataTypes.FLOAT,
        gnp: DataTypes.DECIMAL,
        gnpold: DataTypes.DECIMAL,
        localname: DataTypes.STRING,
        governmentform: DataTypes.STRING,
        headofstate: DataTypes.STRING,
        capital: DataTypes.INTEGER,
        code2: DataTypes.STRING
    }, {
       tableName: 'country' 
    });
  
    Country.associate = function (models) {
      models.Country.hasMany(models.City, {
        onDelete: "CASCADE",
        foreignKey: "countrycode",
        sourceKey: "code"
      });

      models.Country.hasOne(models.City, {
          foreignKey: "id",
          sourceKey: "capital"
      });
    };
  
    return Country;
  };