import fs from 'fs';

 class ProductManager {
  
    constructor(){
        this.path = 'product.json';
    }

    async getproduct (){  /*Parseo a mis productos y los traigo */
        //leer archivo
        let contenido = await fs.promises.readFile(this.path)
        //pareso a objeto
        let producto = JSON.parse(contenido)
        //return arreglo
        return producto;
    }

    async getProductById(id){ /* busco a mi producto por su ID */
        let productMacht = 'Not found'
       let contenido = await fs.promises.readFile(this.path)
       let producto = JSON.parse(contenido)
       let productoEncontrado = producto.find(product => product.id == id)
       if(productoEncontrado){
        productMacht = productoEncontrado
       }
       return productMacht;
    }

    async updateProduct(id,product){ /*Actualizo a mi producto segun su ID */
        let producto = await this.getproduct()
        console.log(producto)
        let indice = producto.findIndex(product => product.id === id)
        console.log(indice)
        if(indice !== -1){
            producto[indice]= product;
            producto[indice].id = id;
        }
        await fs.promises.writeFile(this.path, JSON.stringify(producto))
        return  { msg: `Producto ${producto[indice].id} fue actualizado`}
    }

    async deleteProduct(id){ /*Elimino a el producto segun su ID */
        let producto = await this.getproduct()
        let indice = producto.findIndex(product => product.id === id)
        let productDelete
        if(indice !== -1){
            productDelete = producto.splice(indice, 1)[0];
        }
        await fs.promises.writeFile(this.path, JSON.stringify(producto))
        return  { msg: `El producto fue eliminado`}
    }

    async AutoAddId(){ /* Creo un auto incrementable del ID */
        
        let contenido = await fs.promises.readFile(this.path)
        //pareso a objeto
        let producto = JSON.parse(contenido)
        let countID = await producto.length +1

        return  countID 
    }

    async machCode(code){ /*Verifico si el codigo existe en los productos insertados */
        let producto = await this.getproduct()
        let indice = producto.findIndex(product => product.code === code)
        //if(indice !== -1){
           return indice //{msg:  `El codigo ${producto[indice].code} ya existe`}
       // }
    }

    async addProduct(product){ /*Agrego un producto nuevo */

        /*Verifico que los campos esten todos */
        if (!product.title || !product.descripcion || !product.price || !product.thumbnail || !product.code || !product.stock){
            return console.log("Tienes que ingresar todos los campos");
        }
        /*Verifico que el codigo no se repita */
        let code_repet = await this.machCode(product.code)
        if(code_repet !== -1 ){
            return console.log("Este codigo ya existe, pruebe con otro") //{msg:  `El codigo ${product.code} ya existe`}
        } else{

        product.id = await this.AutoAddId()
        let contenido = await fs.promises.readFile(this.path)
        let producto = JSON.parse(contenido)
        producto.push(product)
        await fs.promises.writeFile(this.path, JSON.stringify(producto))

    }}
}

export default ProductManager;

/*
const manager = new ProductManager();

let producto3 = {
    title: 'galleta26',
    descripcion: 'chispas26',
    price: 402,
    thumbnail: 'azul26',
    code: 352236,
    stock: 402
}
manager.addProduct(producto3)*/
/*
let producto5 = {
    title: 'pepeactualiz',
    descripcion: 'chispas_actualiz',
    price: 40,
    thumbnail: 'azul_actualiz',
    code: 35666,
    stock: 60
}

let productobusc = await manager.getProductById(1)
console.log(productobusc)

let respuesta = await manager.updateProduct(1,producto5)
console.log(respuesta)

let eliminar = await manager.deleteProduct(3)
console.log(eliminar)
*/

