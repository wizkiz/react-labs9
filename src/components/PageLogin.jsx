import React from 'react'

class PageLogin extends React.Component {

    submitHandler = (event) => {
        event.preventDefault();
    }

    render () {
        
        return (
            <div style={{textAlign: "center"}}>
                <h3>Login page</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Username"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PageLogin