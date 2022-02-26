let costoPedido = 0;

const restaurante = {
    cliente:{
        nombre: 'Diego',
        edad: 18,
        deuda: 0,
        pedido:[]
    },
    menu:{
        hamburguesa:{
            nombre: 'Hamburguesa',
            costo: 20,
            codigo: 'h100'
        },
        hamburguesa_doble:{
            nombre: 'Hamburguesa Doble',
            costo: 30,
            codigo: 'h101'
        },
        Papas_Fritas:{
            nombre: 'Papas fritas',
            costo: 8,
            codigo: 'h102'
        },
        Refresco_Personal:{
            nombre: 'Refresco Personal',
            costo: 6,
            codigo: 'h103'
        }

    },

    mostrarMenu(){
        console.log(`
Los productos son:
    -${restaurante.menu.hamburguesa.nombre}             Precio: $${restaurante.menu.hamburguesa.costo}      Codigo: ${restaurante.menu.hamburguesa.codigo}
    -${restaurante.menu.hamburguesa_doble.nombre}       Precio: $${restaurante.menu.hamburguesa_doble.costo}      Codigo: ${restaurante.menu.hamburguesa_doble.codigo}
    -${restaurante.menu.Papas_Fritas.nombre}            Precio: $${restaurante.menu.Papas_Fritas.costo}       Codigo: ${restaurante.menu.Papas_Fritas.codigo}
    -${restaurante.menu.Refresco_Personal.nombre}       Precio: $${restaurante.menu.Refresco_Personal.costo}       Codigo: ${restaurante.menu.Refresco_Personal.codigo}
    `)
    },
    pedir(producto){
        if(producto != restaurante.menu.hamburguesa.codigo && producto != restaurante.menu.hamburguesa_doble.codigo && producto != restaurante.menu.Papas_Fritas.codigo && producto != restaurante.menu.Refresco_Personal.codigo){
            console.log('       POR FAVOR INGRESE EL CODIGO DE UN PRODUCTO DEL MENU')
        }
        switch(true){
            case producto === restaurante.menu.hamburguesa.codigo:
                this.cliente.pedido.push(this.menu.hamburguesa)
                console.log("Su hamburguesa fue añadida al pedido")
                break
            case producto === restaurante.menu.hamburguesa_doble.codigo:
                    this.cliente.pedido.push(this.menu.hamburguesa_doble)
                    console.log("Su hamburguesa doble fue añadida al pedido")
                    break
            case producto === restaurante.menu.Papas_Fritas.codigo:
                        this.cliente.pedido.push(this.menu.Papas_Fritas)
                        console.log("Sus papas fritas fueron añadidas al pedido")
                    break
            case producto === restaurante.menu.Refresco_Personal.codigo:
                        this.cliente.pedido.push(this.menu.Refresco_Personal)
                        console.log("Su refresco fue añadido al pedido")
                        
        }
    },
    mostrarPedido(){
        console.log('Su pedido es : ')
        for(producto of restaurante.cliente.pedido){
            console.log(producto.nombre)
        }
    },
    CostoFinal(){
        for(costo of this.cliente.pedido){
            costoPedido = costoPedido + costo.costo
        }

        this.cliente.deuda = costoPedido

        return costoPedido


    },

    pagarPedido(Efectivo){
        switch(true){
            case Efectivo < this.cliente.deuda:
                console.log('No tiene el dinero necesario para pagar su pedido')
                break
            case Efectivo > this.cliente.deuda:
                console.log(`Muchas gracias, su vuelto es ${Efectivo-this.cliente.deuda}`)
                break
            case Efectivo === deuda:
                console.log("Muchas gracias por su compra")
        }
    }

    



}






