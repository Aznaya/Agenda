const db = require('./db');
const PostFav = db.sequelize.define('favoritos', {
    idFavoritos: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    numero_favoritos: {
        type: db.Sequelize.STRING
    },
    Contato_idContato: {
        type: db.Sequelize.INTEGER
    }
});
module.exports = PostFav;