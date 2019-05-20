var db = require("../models/db/database.connection");

module.exports = app => 
    new Promise((resolve, reject) => {
        try {
            db.sequelize.sync();
            resolve(app);
        } catch (err) {
            reject(err);
        }
    });