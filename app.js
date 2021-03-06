const consign = require('consign'),
express = require('express');

const app = express();

consign({cwd: 'app'})
    .include('helper')
    .then('controllers')
    .into(app);

app.listen(3000, () => console.log('app rodando'));
