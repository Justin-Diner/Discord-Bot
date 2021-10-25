/* // Ping and Pong Response
module.exports = {
    name: 'ping'
    execute (client, commands) {
        client.on('messageCreate', msg => { 
        if (msg.content === prefix + 'ping') {
          msg.reply('pong')
        }
      }} 
}



  export { pingPong }; */