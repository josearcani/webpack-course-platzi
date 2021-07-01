const fs = require('fs');
// crea nuestro archivo .env dentro del servidor
fs.writeFileSync('./.env', `API=${process.env.API}\n`);