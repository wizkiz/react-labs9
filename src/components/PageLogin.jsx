import React from 'react'
import { userLogin } from '../redux/thunk'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PageLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    submitHandler = () => {
        event.preventDefault();
        console.log(`pagelogin username: ${this.state.username}`)
        this.props.loginUser(this.state.username).then(() => {
            if (this.props.user !== undefined) {
                this.props.history.push("/list");
            }
        });
    }

    usernameInputHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    componentDidMount = () => {
        if (this.props.user !== undefined) {
            alert("You are already logged in");
            this.props.history.push("/list");
        }
    }

    render() {

        return (
            <div style={{ textAlign: "center" }}>
                <h3>Login page</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Username" onChange={this.usernameInputHandler} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (username) => dispatch(userLogin(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageLogin))