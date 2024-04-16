import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import { fakeApiCallById } from "../Utils/FakeApiCallById";
import { useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../service/firebase/firebaseConfig'



export const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [productsCharged, setProductsCharged] = useState(null);

    useEffect(() => {

        const docRef = doc(db, 'productos', productId)

        getDoc(docRef)
            .then( response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProductsCharged(productAdapted)
            })
            .catch(error => console.error("Error fetching product details:", error));
    },[productId])

    // useEffect(() => {
    //     fakeApiCallById(parseInt(productId))// las urls te dan siempore una string, por eso tenes que convertirla a entero osea a numero// tambien el nombre de la prop que se pasa debe ser igual a la terminación de la url en app.jsx (path='/item/:productId')
    //         .then(resp => setProductsCharged(resp))
    //         .catch(error => console.error("Error fetching product details:", error));
    // }, [productId]);

    return (
        <div>
            {/* {console.log(productsCharged)} */}
            {productsCharged && <ItemDetail {...productsCharged} />}
        </div>
    );
}
