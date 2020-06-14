const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'user1', '1234',{
    host: "localhost",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};