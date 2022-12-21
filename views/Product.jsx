const React = require('react');
const Layout = require('../views/Layout.jsx')

const label = {
    margin: '10px'
}

class Product extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <Layout title={" New Product Form"} id={user.id}>
                  <form style={label} action={`/${user.id}`} method="POST">
                    <label  htmlFor="productName">Product Name: </label><input style={label} type="text" name="productName" /><br />    
                    <label  htmlFor="image">Image URL: </label><input style={label} type="text" name="image"/><br />
                    <label  htmlFor="description">Description: </label><input style={label} type="textarea" name="description" /><br />
                    <label  htmlFor="quantity">Quantity: </label><input style={label} type="number" name="quantity"/><br />
                    <label  htmlFor="price">Price: </label><input style={label} type="number" name="price" /><br />
                    <label  htmlFor="keywords">Key Words: </label><input style={label} type="text" name="keywords" /><br />
                          <input type="submit" value="Add my product!" />
                </form>
            </Layout>
        )
    }
}

module.exports = Product;