const React = require('react');

//Styles
const div = {
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    color: 'white'
}

const form = {
    fontSize : "20px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent : 'space-evenly',
    marginTop : '20px'
}

const body = {
    backgroundColor : 'blue',
    marginTop : '100px'
}


const p = {
    fontSize : '30px',
    margin: '0px'
}

const button = {
    borderRadius : '1.5rem',
    backgroundColor: 'grey',
    color: 'white',
   
}


//

class Login extends React.Component {
    render() {
        return (
        <body style={body}>
            <div style={div}>
                <p style={p}>Welcome to Richard's world</p>
                <p style={p}>Please Log into your accout</p>

                <form style={form} action="/login" method="POST">
                    <label htmlFor="email">Email:</label> <input type="text" name="email" /><br />
                    <label htmlFor="password">Password:</label><input type="password" name="password" /><br />
                    <input style={button} type="submit" value="Log in" />
                </form>
            </div>
        </body>
        );
    }
}

module.exports = Login;