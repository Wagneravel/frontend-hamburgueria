import { useContext } from "react"
import { CarTotalBtnClearCart } from "../../components/CalculeValueCart"
import { ListCart } from "../../components/CartSalesComponent"
import { HeaderHome } from "../../components/HeaderDashBoardComponent"
import { ListProduct } from "../../components/ProductListComponent"
import { SearchHome } from "../../components/SearshComponent"
import { DashBoardContext } from "../../contexts/DashBoardContext"




export const DashBoard = () => {

    const { currentModal } = useContext(DashBoardContext)

    return (
        <>
            <HeaderHome />
            <ListProduct />
            {
                currentModal && (
                    <ListCart />
                )
            }
           
        </>
    )
}