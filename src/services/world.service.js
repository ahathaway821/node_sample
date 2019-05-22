var dbModels = require("../models/db/database.connection");

const service = {};

// Country ==================================================

service.listCountries = () => dbModels.Country.findAll({
    include: [{
        model: dbModels.City,
        as: 'Cities'
  }]
});

service.readCountries = countryCode => dbModels.Country.findByPk(countryCode, {
    include: [{
        model: dbModels.City,
        as: 'Cities'
  }]
});

service.createCountry = model => dbModels.Country.create(model);

service.update = (recordId, model) => Promise.resolve({});

service.delete = recordId => Promise.resolve({});

// ==================================================

// City ==================================================

service.readCities = id => dbModels.City.findByPk(id);

service.createCity = model => {console.log(model); return dbModels.City.create(model);}


// ==================================================

module.exports = service;
