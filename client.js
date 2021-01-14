const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("connect",() => {
    console.log(" successful")
    conn.write("Name: Fatemeh");
   //conn.write("Move: up");
  } )
  return conn;
}
// setTimeout(( ) => {
  
 
// } , 4000);

console.log('Connecting ...');
//connect();
//const connectName = faker.name.findName()
//connect.write(`setName${connectName}`)
module.exports = {connect};