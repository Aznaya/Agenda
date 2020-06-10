//Conexao com BD MySQL

const mysql = require('mysql');
var nom = 'lula';
var num = '171';
var fot = 'www.lol.com';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user1',
    password: '1234',
    database: 'mydb'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//Pesquisa dados
connection.query('SELECT * FROM contato', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log('Erro ao realizar a consulta');
    }
});
//Insere os dados
   connection.query("INSERT INTO contato(nome,numero,foto) VALUES(?,?,?)",[nom,num,fot],function (err, result){
      if (!err){
          console.log('Contato cadastrado');
      } else{
          console.log('erro ao cadastrar');
      }
   });
   //Atualiza os dados
    connection.query("UPDATE contato SET nome = ? WHERE idcontato = ?",["luladrao",2],function (err, result){
            if (!err){
                console.log('Contato atualizado');
            } else{
                console.log('erro ao atualizar');
            }
        });
    //deleta os dados
   connection.query("DELETE FROM contato WHERE idcontato = ?",[2],function (err, result){
            if (!err){
                console.log('Contato deletado');
          } else{
               console.log('erro ao deletar');
          }
        });

