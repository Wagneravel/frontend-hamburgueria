import { useContext } from "react"
import { ListCart } from "../../components/CartSalesComponent"
import { HeaderHome } from "../../components/HeaderDashBoardComponent"
import { ListProduct } from "../../components/ProductListComponent"
import { DashBoardContext } from "../../contexts/CartContext"




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