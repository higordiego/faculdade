const mongoose = require('mongoose')

const online = true;
const url =  online ? 'mongodb://faculdade:faculdade@ds137220.mlab.com:37220/faculdade' : 'mongodb://localhost/project';

mongoose.Promise = require('bluebird')

mongoose.connect(url)


.then(() =>{
 mongoose.connection.on('error', err =>{
  console.log(`mongoose connection: `+err)
})
 mongoose.connection.on('reconnected', ()=> {
  console.log('Reconnected to MongoDB');
});
 console.log('Mongodb Conectado : )')
})
.catch(err => {
  console.log(`rejected promise ${err}`)
  mongoose.disconnect()      

})

process.on('SIGINT', ()=> {
  mongoose.connection.close(()=> {
    console.log('Mongodb: bye : )');
    process.exit(0);
  });
});


module.exports = mongoose;

