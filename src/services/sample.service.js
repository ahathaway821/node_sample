var SampleModel = require("../models/sample.model");
var dbModels = require("../models/db/database.connection");

const service = {};

// ==================================================

service.list = () => dbModels.Country.findAll({
    include: [{// Notice `include` takes an ARRAY
    model: dbModels.City,
    as: 'Cities'
  }]
});

service.read = recordId => Promise.resolve({});

service.create = model => Promise.resolve({});

service.update = (recordId, model) => Promise.resolve({});

service.delete = recordId => Promise.resolve({});

// ==================================================

module.exports = service;
