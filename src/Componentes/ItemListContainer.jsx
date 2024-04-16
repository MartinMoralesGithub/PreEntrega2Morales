import { useEffect, useState } from "react";
// import products from "../Utils/MocksAsync.json";
// import { fakeApiCall } from "../Utils/FakeApiCall";
// import { fakeApiCallByCategory } from "../Utils/FakeApiCallByCategory";
import {ItemList} from "./ItemList";
import { Link, useParams } from "react-router-dom"; 
import {doc, getDocs, collection, query, where, getFirestore} from 'firebase/firestore'
import {db} from '../service/firebase/firebaseConfig'


export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productsCharged, setProductsCharged] = useState([]);


useEffect(()=>{

    const collectionRef = categoryId
        ? query(collection(db, 'productos'), where ('categoria','==',categoryId))
        : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response =>{
                const productosAdapted = response.docs.map(doc=>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductsCharged(productosAdapted)

            })
            .catch(error => {
                console.log(error)
            })
},[categoryId])



// if (categoryId) {// si existe categoria filtra por categoria y sino muestra todo
//     useEffect(() => {
//         fakeApiCallByCategory(categoryId).then(resp => setProductsCharged(resp))
//     }, [categoryId]);
// }else{
//     useEffect(() => {
//         fakeApiCall(products.productos).then(resp => setProductsCharged(resp))
//     }, [products.productos]);
// }

// useEffect(() => {

//     const prodRef = doc(db, 'productos', '1')
//     getDoc(prodRef).then((snapshot) =>{
//         if (snapshot.exists()){
//             console.log({...snapshot.data()})}
//     })
// },[])


    return (
        <>
            <div>
            {productsCharged && <ItemList products={productsCharged}/>}
            </div>
        </>
    );
}