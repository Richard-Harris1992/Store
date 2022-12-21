const React = require('react');
const Layout = require('../views/Layout.jsx');

const isCustomer = (userObj, productObj) => {
    if(userObj.customer) { 
        if(productObj.quantity > 0) {
            return(  <form action={`/${userObj.id}/${productObj.id}/addToCart?_method=PUT`} method="POST">
                        <input type="submit" value="Add to cart!" />
                     </form>
            );
        } else {
            return( 
                        <button style={button}>Out of stock</button>
            );
        }
    }
}
const button = {
    marginBottom: '7px',
    backgroundColor: '#cbdfbd'
}

const img = {
    margin: "50px"
}
class Show extends React.Component {
    render() {
        const product = this.props.product;
        const user = this.props.user
        return (
            <Layout title={product.productName} id={user.id}>
                <img style={img} src={`${product.image}`} alt="Image of product" />
                <p>Description: {product.description}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
                {isCustomer(user, product)}

            </Layout>
        );
    }
}

module.exports = Show;