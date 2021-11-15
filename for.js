
//<!--CHRISTIAN ALDANA 0909-21-697-->

const $tabla = document.getElementById("tablas")

let izquierda = 10
let derecha = 10
let resultado

for(let i = 1; i<=izquierda; i++){

    //creamos un elemento "articulo" en el dom
    const $article = document.createElement("article")

    for(let j = 1; j<=derecha; j++){

        //obtenemos el resultado de la multiplicacion
        resultado = i*j

        //creamos un "elemento" p
        const $p = document.createElement("p")

        //el elemento p va a ser igual a la multiplicacion
        $p.textContent = `${i}  X  ${j} =  ${resultado}`

        //el elemento p lo agregamos como hijo al article
        $article.appendChild($p)
        

        //el elemento article lo agregamos como hijo al seccion ya que soporta varios elementos.
        $tabla.appendChild($article)
    }
    resultado = 0;
}