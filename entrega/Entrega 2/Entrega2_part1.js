import fs from 'fs';

class ProductManager {
    products;
    

    constructor (){
        this.products = []
        this.path = 'product.json';
    }

    async AutoAddId(){
        //return this.path.length + 1;
        let contenido = await fs.promises.readFile(this.path)
        //pareso a objeto
        let producto = JSON.parse(contenido)
        let countID = await contenido.length +1

        return  countID //this.producto.length + 1;
    }

    async getproduct (){
        //leer archivo
        let contenido = await fs.promises.readFile(this.path)
        //pareso a objeto
        let producto = JSON.parse(contenido)
        //return arreglo
        return producto;
    }

    async getProductById(id){
        let productMacht = 'Not found'
       let contenido = await fs.promises.readFile(this.path)
       let producto = JSON.parse(contenido)
       let productoEncontrado = producto.find(elem => elem.id == id)
       if(productoEncontrado){
        productMacht = productoEncontrado
       }
       return productMacht;
    }
    /* no lo termine porque no encuentro forma de meter el usuario a actualizar aca */
   /* async updateProduct(id){
        let producto = await this.getproduct()
        let indice = producto.findIndex(elem => elem.id === id)
    }*/

  
    matchCode(code){
        const productExits = this.products.some(elem => elem.code === code)
        return productExits //console.log("ya existe el code")
    }

    async addproducts(title,descripcion, price, thumbnail,code,stock){
            /* creo arreglo para guardar variables y controlarlas */
            
            if (!title || !descripcion || !price || !thumbnail || !code || !stock){
                return console.log("Tienes que ingresar todos los campos");
            }

            const ExistsProductWhitCode = this.matchCode(code)
        if(ExistsProductWhitCode)
            return console.log("Este codigo ya existe");
                else {

            let newproducts = {
                id: await this.AutoAddId(), 
                title,
                descripcion,
                price,
                thumbnail,
                code,
                stock
            }
            //this.products.push(newproducts)
            let contenido = await fs.promises.readFile(this.path)
            let producto = JSON.parse(contenido)
            producto.push(newproducts) 
            await fs.promises.writeFile(this.path, JSON.stringify(producto))
        }}
}  

let manager = new ProductManager()
await manager.addproducts('sf' , 'choco', 50 , 'nose', 300 , 30)
await manager.addproducts('galle' , 'vaini', 60 , 'pepe', 400 , 40)
/*
let imprimeproductos = await manager.getproduct()
console.log(imprimeproductos)

let buscarid = await manager.getProductById(14)
console.log(buscarid)*/