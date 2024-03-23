import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { fakeApiCallById } from "../Utils/FakeApiCallById";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [productsCharged, setProductsCharged] = useState(null);

    useEffect(() => {
        fakeApiCallById(parseInt(productId))// las urls te dan siempore una string, por eso tenes que convertirla a entero osea a numero// tambien el nombre de la prop que se pasa debe ser igual a la terminación de la url en app.jsx (path='/item/:productId')
            .then(resp => setProductsCharged(resp))
            .catch(error => console.error("Error fetching product details:", error));
    }, [productId]);

    return (
        <div>
            {console.log(productsCharged)}
            {productsCharged && <ItemDetail {...productsCharged} />}
        </div>
    );
}
