const React = require('react');
const Layout = require('../views/Layout.jsx')



class Edit extends React.Component {
    render() {
        const product = this.props.product;
        const user = this.props.user;
        return (
            <Layout title={"Edit Form"} id={user.id}>
                <form action={`/${user.id}/${product.id}?_method=PUT`} method="POST">
                    <label htmlFor="productName">Product Name:</label><input type="text" name="productName" /><br />
                    <label htmlFor="image">Image URL:</label><input type="text" name="image" /><br />
                    <label htmlFor="description">Description: </label><input type="text" name="description" /><br />
                    <label htmlFor="quantity">Quantity:</label><input type="number" name="quantity" /><br />
                    <label htmlFor="price">Price</label><input type="number" name="price" /><br />
                    <label htmlFor="keywords">Key Words:</label><input type="text" name="keywords" /><br />
                    <input type="submit" value="Confirm changes!" /> <br />
                </form>

                <form action={`/${user.id}/${product.id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete Item" />
                </form>

            </Layout>
        )
    }
}

module.exports = Edit;