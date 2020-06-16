const db = require('./db');

const Post = db.sequelize.define('contatos', {
    idContato: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    foto: {
        type: db.Sequelize.STRING
    }
});
module.exports = Post;

