const path = require('path')
const fs = require('./funcoes')

const caminho = path.join(__dirname, 'legendas')

fs.lerDiretorio(caminho)
    .then(console.log)
