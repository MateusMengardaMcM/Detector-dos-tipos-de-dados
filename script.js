let input = document.getElementById("entrada");
let saida = document.getElementById("resultado");

function verificarTipo() {
    let valor = input.value;

    let tipo;

    if (valor === "true" || valor === "false") {
        tipo = "boolean";
        valor = (valor === "true");
    }
    else if (!isNaN(valor) && valor.trim() !== "") {
        tipo = "number";
        valor = Number(valor);
    }
    else {
        tipo = "string";
    }

    saida.innerText = `Valor: ${valor} | Tipo identificado: ${tipo}`;
    console.log(typeof valor, valor);
}