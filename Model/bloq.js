const db = require('./db');
const PostBloq = db.sequelize.define('bloqueados',{
    idBloqueados:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    numero_bloqueados:{
        type: db.Sequelize.STRING
    },
    Contato_idContato:{
        type: db.Sequelize.INTEGER
    }


});
module.exports = PostBloq;