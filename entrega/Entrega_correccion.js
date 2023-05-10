
class ProductManager {
    products;

    constructor (){
        this.products = []
    }

    AutoAddId(){
        return this.products.length + 1;
    }

    getproduct () {
        console.log(this.products)
    }

    matchId(id){
        let products = this.products.find(elem => elem.id == id)
        return products
    }

    getProductById(id){
        let product = this.matchId(id);
        if (product)
            return product
            else console.log("Not found")

    }
  
    coincideCode(code){
        const productExits = this.products.some(elem => elem.code === code)
        return productExits //console.log("ya existe el code")
    }



    addproducts(title,descripcion, price, thumbnail,code,stock){
        /* creo arreglo para guardar variables y controlarlas */
        
        if (!title || !descripcion || !price || !thumbnail || !code || !stock){
            return console.log("Tienes que ingresar todos los campos");
        }

        const ExistsProductWhitCode = this.matchCode(code)
      if(ExistsProductWhitCode)
        return console.log("Este codigo ya existe");
            else {



        let newproducts = {
            id: this.AutoAddId(), 
            title,
            descripcion,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newproducts)
    }
}
}  

let manager = new ProductManager()
manager.addproducts('sf' , 'choco', 50 , 'nose', 300 , 30)
manager.addproducts('galle' , 'vaini', 60 , 'pepe', 400 , 40)
manager.getproduct()