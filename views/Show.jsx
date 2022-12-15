const React = require('react');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const isVendor = (userObj) => {
    if(userObj.vendor) {
        return(<button><a href={`/${userObj.id}/add`}>Add a product</a></button>)
    }
}

const showProduct = (productObj) => {
    productObj.forEach(product => {
        return (
            <div>
                <p>{product.productName}</p>
                <img src={product.image} alt="Image of product" />
                <p>{product.description}</p>
                <p>{product.quantity}</p>
                <p>{product.price}</p>
            </div>

        );
    });
}

class Index extends React.Component {
    render() {
        const user = this.props.user;
        const products = this.props.product;
       
        return (
            <div>
                {console.log(user)}
                <p>Welcome back {user.username}!</p><br /><br /><br /><br />
                {isVendor(user)}
                {
                    products.map(product => {
                        return (
                            <a href={`/${user.id}/${product.id}`}>
                                <div>
                                    <p>{product.productName}</p>
                                    <img src={`${product.image}`} alt="Image of product" />
                                    <p>${product.price}</p>
                                </div>
                            </a>
                            
                        )}
                    )}
                    
                    
                
                
            </div>
        );
    }
}

module.exports = Index;