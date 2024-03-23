import { Item } from "./Item"

export const ItemList = ({products}) => {
return(
    <>
    <div className="px-16 py-8 grid grid-cols-4 gap-[30px]">{products.map(prod => <Item key={prod.id} {...prod} />)} </div>
    </>
)
}