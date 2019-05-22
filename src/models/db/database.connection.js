var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};
    
const settings = {
    development: {
        host: "localhost",
        username: "",
        password: "",
        database: "postgres"
    },
    // test: {
    //     storage: ":memory:"
    // }
    // production: {
    //     username: process.env.DB_USERNAME,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    //     host: process.env.DB_HOSTNAME,
    //     dialect: 'postgres',
    //     use_env_variable: 'DATABASE_URL'
    // }
};

let config = settings[env];

// Set environment agnostic settings
config.define = {
    freezeTableName: false,
    timestamps: false
}
config.dialect = "postgres";

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Load in models and their associations to be registered in sequelize
const dir = `${__dirname}`;
fs
    .readdirSync(dir)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-8) === 'model.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(dir, file));
        db[model.name] = model;
        console.log(`>> Model found: ${model.name}`);
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
