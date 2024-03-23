import products from "../Utils/MocksAsync.json";

export const fakeApiCallById = (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.productos.find(prod => prod.id === productId))
      }, 2000)
    })
  }
  