const React = require('react');
const Layout = require('../views/Layout.jsx');

const isCustomer = (userObj, productObj) => {
    if(userObj.customer) {
        return(  <form action={`/${userObj.id}/${productObj.id}/addToCart?_method=PUT`} method="POST">
                    
                    <input type="submit" value="Add to cart!" />
                 </form>
        )
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
                {isCustomer(user, product)}

            </Layout>
        );
    }
}

module.exports = Show;