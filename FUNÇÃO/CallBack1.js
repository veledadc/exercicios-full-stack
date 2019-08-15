    const fabriacantes = ["Mercedez", "Audi", "BMW" ]

    function Imprimir (nome, indice) {
        console.log(`${indice + 1}, ${nome}`)

    }

fabriacantes.forEach(Imprimir)
fabriacantes.forEach(fabricante => console.log(fabricante))
