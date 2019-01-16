/**
 * Author: Kim Nejudne
 */
////////////////////////
// NPM MODULE EXPORTS //
////////////////////////
const express = require('express');


/////////////////////
// INITIALIZATIONS //
/////////////////////
const app = express();


////////////////////////
// DEV CONFIGURATIONS //
////////////////////////
if (app.get('env') !== 'production') {
  require('dotenv').config();
}


/////////////////
// PORT LISTEN //
/////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('\n#######################################\n');
  console.log(`Listening on PORT: ${PORT}`);
  console.log('\n#######################################\n');
});
