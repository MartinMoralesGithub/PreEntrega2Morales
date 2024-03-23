import { useEffect, useState } from "react";
import products from "../Utils/MocksAsync.json";
import { fakeApiCall } from "../Utils/FakeApiCall";
import { fakeApiCallByCategory } from "../Utils/FakeApiCallByCategory";
import {ItemList} from "./ItemList";
import { Link, useParams } from "react-router-dom"; 

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productsCharged, setProductsCharged] = useState([]);


if (categoryId) {// si existe categoria filtra por categoria y sino muestra todo
    useEffect(() => {
        fakeApiCallByCategory(categoryId).then(resp => setProductsCharged(resp))
    }, [categoryId]);
}else{
    useEffect(() => {
        fakeApiCall(products.productos).then(resp => setProductsCharged(resp))
    }, [products.productos]);
}


    return (
        <>
            <div>
            {productsCharged && <ItemList products={productsCharged}/>}
            </div>
        </>
    );
}