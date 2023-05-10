
class ProductManager {
    products;

    constructor (){
        this.products = []
    }
    getAutoId(){
        return this.products.length + 1;
    }

    getProducts(){
        console.log(this.products)
    }

    
    addProducts(title , description, price, thumbnail, code, stock){

       let arrayDatos = []
        arrayDatos.push(title);
        arrayDatos.push(description);
        arrayDatos.push(price);
        arrayDatos.push(thumbnail);
        arrayDatos.push(code);
        arrayDatos.push(stock);
       let i = 0
       while (i< arrayDatos.length){
   
        if ( arrayDatos[i] !== '' )
            i++
            else return console.log("Campo vacío")
        
       }
        
        let newProducts = {
                id: this.getAutoId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(newProducts)
    }
}

let manager = new ProductManager()
manager.addProducts('sf' , 'choco', 50 , 'nose', '' , 30)
manager.getProducts()