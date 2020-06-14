const db = require('./db');

const Post = db.sequelize.define('contato',{
    idContato:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: db.Sequelize.STRING
    },
    numero:{
        type: db.Sequelize.STRING
    },
    foto:{
        type: db.Sequelize.STRING
    }


});
const PostFav = db.sequelize.define('favoritos',{
    idFavoritos:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    numero_favoritos:{
        type: db.Sequelize.STRING
    },
    Contato_idContato:{
        type: db.Sequelize.INTEGER
    }


});
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
module.exports = Post;
module.exports = PostFav;
module.exports = PostBloq;