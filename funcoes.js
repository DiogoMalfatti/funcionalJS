const path = require('path')
const fs = require('fs')

function lerDiretorio (caminho) {
    let arquivos = fs.readdirSync(caminho)
    return arquivos.map(arquivo => path.join(caminho, arquivo))
}

module.exports = {
    lerDiretorio
}