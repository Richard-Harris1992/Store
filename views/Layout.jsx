const React = require('react');
const override = require('method-override')

/* Work on log out button */

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head><title>Richard's store</title></head>
                <body>
                    <h1>{this.props.title}</h1>
                    <nav>
                        <a href={`/${this.props.id}`}>Home</a>
                        <a href={`/${this.props.id}/myProducts`}>My Products</a>
                        <a href={`/${this.props.id}/shoppingCart`}>Shopping Cart</a>
                        {/* <form method="POST">
                            <input type="hidden" name="_method" value="PUT"></input>
                            <button type="submit">LOG OUT</button>
                        </form> */}
                    </nav>
                    {this.props.children}
                    <footer>Richards World 2022</footer>
                </body>
            </html>
        )
    }
}

module.exports = Layout