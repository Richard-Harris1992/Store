const React = require('react');
const Layout = require('../views/Layout.jsx');

const isCustomer = (userObj) => {
    if(userObj.customer) {
        return(<button><a href={`/${userObj.id}/add`}>Add to cart</a></button>)
    }
}

class Show extends React.Component {
    render() {
        const product = this.props.product;
        const user = this.props.user
        return (
            <Layout title={product.productName} id={user.id}>
                <img src={`${product.image}`} alt="Image of product" />
                <p>{product.description}</p>
                <p>{product.quantity}</p>
                <p>${product.price}</p>
                {isCustomer(user)}

            </Layout>
        );
    }
}

module.exports = Show;