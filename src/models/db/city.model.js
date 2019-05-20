module.exports = (sequelize, DataTypes) => {
    var City = sequelize.define('City', {
        countrycode: { type: DataTypes.STRING, foreignKey: true },
        name: DataTypes.STRING,
        district: DataTypes.STRING,
        id: { type: DataTypes.INTEGER, primaryKey: true},
        population: DataTypes.INTEGER
    }, {
       tableName: 'city' 
    });

    return City;
  };