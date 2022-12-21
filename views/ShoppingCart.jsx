const React = require('react');
const Layout = require('../views/Layout.jsx');

const id = {
    backgroundColor: '#f27059',
    border: 'none'
}

const button = {
    marginBottom: '7px',
    backgroundColor: '#cbdfbd'
}

class ShoppingCart extends React.Component {
    render() {
        const product = this.props.product
        const user = this.props.user
        return (
            <Layout title={"Shopping Cart"} id={user.id}>
                {
                    product.map(item => {
                        return (

                            <div>
                                <p>Product name : {item.productName}</p>
                                <img src={item.image} alt="Product Image" />
                                <form action={`/${user.id}/shoppingCart?_method=DELETE`} method="POST">
                                    <label htmlFor="productId">Product ID:</label><input style={id} type="text" name="id" value={`${item.id}`} readOnly /><br />
                                    <input type="submit" value="Remove from cart." style={button} />
                                </form>

                            </div>
                        )
                    })

                }

            </Layout>

        )
    }
}

module.exports = ShoppingCart;