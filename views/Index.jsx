const React = require('react');
const Layout = require('../views/Layout.jsx')


const isVendor = (userObj) => {
    if(userObj.vendor) {
        return(<button style={button}><a style={a} href={`/${userObj.id}/add`}>Add a product</a></button>)
    }
}

const h1 = {
    marginTop: '75px'
}
const div = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cbdfbd',
    width: '500px',
    height: '300px',
    margin: '100px',
    borderRadius: '1.5rem' 
}
const a = {
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
}
const button = {
    marginBottom: '7px',
    backgroundColor: '#cbdfbd'
}
const img = {
    height: "200px",
    border: '2px solid black',
    borderRadius: '1.5rem'
}

class Index extends React.Component {
    render() {
        const user = this.props.user;
        const products = this.props.product;
       
        return (
            <Layout title="Current Products" id={user.id}>
                <h1 style={h1}>Welcome back {user.username}!</h1>
                
                {
                    products.map(product => {
                        return (
                            <div style={div}>
                                
                            
                            <a style={a} href={`/${user.id}/${product.id}`}>
                                
                                    <p>{product.productName}</p>
                                    <img style={img} src={`${product.image}`} alt="Image of product" />
                                    <p>Price: ${product.price}</p>
                                
                            </a>
                            </div>
                        )}
                    )}
                
                    {isVendor(user)} 
                    
            </Layout>
        );
    }
}

module.exports = Index;