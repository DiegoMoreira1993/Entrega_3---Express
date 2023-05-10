
class ProductManager {
    products;

    constructor(){
        this.products = []
    }
    getAutoID(){
        return this.products.length + 1;
    }

    getProducts(){
        console.log(this.products)
    }
    
    addProducts(title , description, price, thumbnail, code, stock){
            let newProducts = {
                ID: this.getAutoID(),
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
manager.addProducts('galleta', 'choco',50, 'nose', 23455, 30)
manager.getProducts