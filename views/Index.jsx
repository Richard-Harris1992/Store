const React = require('react');
const Layout = require('../views/Layout.jsx')


const isVendor = (userObj) => {
    if(userObj.vendor) {
        return(<button><a href={`/${userObj.id}/add`}>Add a product</a></button>)
    }
}



class Index extends React.Component {
    render() {
        const user = this.props.user;
        const products = this.props.product;
       
        return (
            <Layout title="Current Products" id={user.id}>
                <p>Welcome back {user.username}!</p><br /><br /><br /><br />
                
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
                
                    {isVendor(user)} 
                    
            </Layout>
        );
    }
}

module.exports = Index;