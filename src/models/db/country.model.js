module.exports = (sequelize, DataTypes) => {
    var Country = sequelize.define('Country', {
        code: { type: DataTypes.STRING, primaryKey: true },
        name: DataTypes.STRING,
        continent: DataTypes.STRING,
    }, {
       tableName: 'country' 
    });
  
    Country.associate = function (models) {
      models.Country.hasMany(models.City, {
        onDelete: "CASCADE",
        foreignKey: "countrycode",
        sourceKey: "code"
      });
    };
  
    return Country;
  };