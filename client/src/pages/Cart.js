import { connect } from "react-redux"
import OrderDetails from "../components/OrderDetails"


const Cart = (props) => {

    return (
        <div>
            <OrderDetails />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(Cart)