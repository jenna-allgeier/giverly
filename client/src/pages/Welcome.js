import { connect } from "react-redux"
import logo from '../logo.png';


const Welcome = (props) => {

    return (
        <div>
            <header className="App-header">
                <h1>Welcome to giverly!</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        appState: state.appState
    }
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(Welcome)

