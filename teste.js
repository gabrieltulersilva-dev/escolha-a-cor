
const cor = document.getElementById("cor")
const trocar = document.getElementById("trocar")

document.getElementById("trocar").onclick = mudar

function mudar() {
    
    
    let valor = cor.value;

    if (valor === "black"){
        document.getElementById("1").style.color = "white"
        document.getElementById("2").style.color = "white"

    }

    document.getElementById("tudo").style.backgroundColor = valor

}