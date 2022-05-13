import { connect } from "react-redux"
import OrderDetails from "../components/OrderDetails"


const Cart = (props) => {

    return (
        <div className="container">
            <h1>Make Your Order</h1>
            <form className="form">
                <label>Choose Event</label>
                <select id='events'>
                    <option value={'mom'}>Mom's birthday</option>
                    <option value={'brother'}>Brother's graduation</option>
                </select>
            </form>
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