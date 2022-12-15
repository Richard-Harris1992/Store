const React = require('react');

class Product extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <div>
                  <form action={`/${user.id}`} method="POST">
                    <label htmlFor="productName">Product Name:</label><input type="text" name="productName" /><br />    
                    <label htmlFor="image">Image URL:</label><input type="text" name="image"/><br />
                    <label htmlFor="description">Description: </label><input type="text" name="description" /><br />
                    <label htmlFor="quantity">Quantity:</label><input type="number" name="quantity"/><br />
                    <label htmlFor="price">Price</label><input type="number" name="price" /><br />
                    <label htmlFor="keywords">Key Words:</label><input type="text" name="keywords" /><br />
                          <input type="submit" value="Add my product!" />
                </form>
            </div>
        )
    }
}

module.exports = Product;