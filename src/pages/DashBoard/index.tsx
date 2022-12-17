import { CarTotalBtnClearCart } from "../../components/CalculeValueCart"
import { ListCart } from "../../components/CartSalesComponent"
import { HeaderHome } from "../../components/HeaderDashBoardComponent"
import { ListProduct } from "../../components/ProductListComponent"
import { SearchHome } from "../../components/SearshComponent"




export const DashBoard = () => {

    return (
        <>
            <h1>Olá, estou no dashboard</h1>
            <HeaderHome />
            <SearchHome />
            <CarTotalBtnClearCart />
            <ListProduct />
            <ListCart />
        </>
    )
}