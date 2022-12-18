const React = require('react');
const override = require('method-override')

//Style
const nav = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: '10px'
}
const header = {
    backgroundColor: '#52b788',
    width: '100%',
}

const h1 = {
    textAlign: 'center'
}
const a = {
    textDecoration : 'none',
    color: 'black',
    fontWeight: '700'
}

const footer = {
    backgroundColor: '#52b788',
    width: '100%',
    height: '45px',
    textAlign : 'center',
    paddingTop: '28px',
    position: 'relative',
    bottom: '0'
}

const body = {
    display: 'flex',
    flexDirection: 'column ',
    alignItems: 'center',
    backgroundColor: '#f27059',
    margin: '0px',
    padding: '0px'
}
//

//work on log out
class Layout extends React.Component {
    render() {
        return (
            <html>
                <head ><title>Richard's store</title></head>
                <body style={body}>
                  <div style={header}>
                    <h1 style={h1}>{this.props.title}</h1>
                    <nav style={nav}>
                        <a style={a} href={`/${this.props.id}`}>Home</a>
                        <a style={a} href={`/${this.props.id}/myProducts`}>My Products</a>
                        <a style={a} href={`/${this.props.id}/shoppingCart`}>Shopping Cart</a>
                        {/* <form method="POST">
                            <input type="hidden" name="_method" value="PUT"></input>
                            <button type="submit">LOG OUT</button>
                        </form> */}
                    </nav>
                  </div>
                  <div>
                    {this.props.children}
                  </div>
                
                </body>
                <footer style={footer}>Richards World 2022 &copy;</footer>
            </html>
        )
    }
}

module.exports = Layout