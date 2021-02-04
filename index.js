const path = require('path')
const fs = require('./funcoes')

const caminho = path.join(__dirname, 'legendas')

const arquivos = fs.lerDiretorio(caminho)
console.log(arquivos)
