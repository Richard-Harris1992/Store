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

const input = {
    width: '20px',
    height: '20px'
}

const p = {
    fontSize : '30px',
    margin: '0px'
}

const button = {
    borderRadius : '1.5rem',
    backgroundColor: 'grey',
    color: 'white'
}
//

class Create extends React.Component {
    render() {
        return (
            <body style={body}>
                <div style={div} >
                    <p style={p}>Welcome to Richard's world</p>
                    <p style={p}>Please take a moment to create an account!</p>

                    <form action="/create" method="POST" style={form}>
                        <div><label htmlFor="email">   Email:</label><input style={form} type="text" name="email" /></div><br />    
                        <div><label htmlFor="username">Username:</label><input type="text" name="username"/></div><br />
                        <div><label htmlFor="password">Password: </label><input type="password" name="password" /></div><br />
                        <div><label htmlFor="customer">Customer</label><input style ={input} type="checkbox" name="customer"/></div><br />
                        <div><label htmlFor="vendor">  Vendor</label><input style={input} type="checkbox" name="vendor" /></div><br />
                          <input style={button} type="submit" value="Create my account!" />
                    </form>
                </div>
            </body>
        );
    }
}

module.exports = Create;