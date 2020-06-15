const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Post = require('./Model/Post');
const PostFav = require('./Model/fav');
const PostBloq = require('./Model/bloq');
const multer = require('./src/config/multer');
//Config
 //template engine
  app.engine('handlebars',handlebars({defaultLayout: 'main'}));
  app.set('view engine','handlebars');
  app.use(express.static(__dirname + '/views'));

  //Body
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
// Conexao bd
app.get('/',function (req,res) {
    Post.findAll().then(function (contatos) {
        res.render('home',{posts: contatos})
    });


});
app.get('/favoritos',function (req,res) {
    PostFav.findAll().then(function (contatos) {
        res.render('Favoritos',{posts: contatos})
    });


});
app.get('/bloqueados',function (req,res) {
    PostBloq.findAll().then(function (contatos) {
        res.render('Bloqueados',{posts: contatos})
    });


});

app.get('/cadastro',function (req,res) {
res.render('cadastro')
});
app.post('/adicionar',function (req,res) {
Post.create({
  nome: req.body.Nome,
  numero: req.body.Numero,
  foto: req.body.Foto
}).then(function () {
  res.redirect('/')
}).catch(function (erro) {
res.send("Houve um erro "+erro)
})
});
app.get('/deletar/:idContato',function (req,res) {
   Post.destroy({where:{'idContato':req.params.idContato}}).then(function () {
res.send('Deletado com Sucesso')
   }).catch(function (erro) {
res.send('Erro ao Deletar '+ erro )
   })
});
app.get('/desbloquear/:idBloqueados',function (req,res) {
    PostBloq.destroy({where:{'idBloqueados':req.params.idBloqueados}}).then(function () {
        res.send('Desbloqueado com sucesso com Sucesso')
    }).catch(function (erro) {
        res.send('Erro ao Desbloquear '+ erro )
    })
});
app.get('/desfavoritar/:idFavoritos',function (req,res) {
    PostFav.destroy({where:{'idFavoritos':req.params.idFavoritos}}).then(function () {
        res.send('Desfavoritado com Sucesso')
    }).catch(function (erro) {
        res.send('Erro ao Desfavoritar '+ erro )
    })
});
app.get('/editar/:idContato',function (req,res) {

    Post.findByPk(req.params.idContato)
        .then(post => {
            res.render('editar', {
                idContato: req.params.idContato,
                nome: post.Nome,
                conteudo: post.Numero,
                foto: post.Foto
            })
        })
        .catch(err => {
            res.send('Post não encontrado!')
        })

});
app.get('/atualizar/:id',function (req,res) {
    Post.update({
           nome: req.body.Nomeedt,
           numero: req.body.Numeroedt,
           foto: req.body.Fotoedt
        },
        {
            where: { 'id': req.params.idContato }
        }).then(function(){
        res.send('Editado com sucesso')
    }).catch(function(err){
        console.log(err);
    })
});
app.get('/fav/:idContato/:numero',function (req,res) {
   PostFav.create({
       numero_favoritos: req.params.numero,
       Contato_idContato: req.params.idContato
   }).then(function () {
       res.redirect('/favoritos')
   }).catch(function (erro) {
       res.send("Houve um erro "+erro)
   })
});
app.get('/bloq/:idContato/:numero',function (req,res) {
    PostBloq.create({
        numero_bloqueados: req.params.numero,
        Contato_idContato: req.params.idContato
    }).then(function () {
        res.redirect('/bloqueados')
    }).catch(function (erro) {
        console.log("Houve um erro "+erro)
    })
});
//inicia o servidor
app.listen(8081);
console.log('API funcionando!');



