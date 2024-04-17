import products from "../Utils/MocksAsync.json";

export const fakeApiCallByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.productos.filter(prod => prod.categoria === categoryId))
      }, 500)
    })
  }
  