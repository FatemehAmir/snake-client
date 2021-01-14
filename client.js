const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("connect",() => {
    console.log(" successful")
    conn.write("Name: Fatemeh");
    conn.write( "Move: down");
    conn.write( "Move: up");
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