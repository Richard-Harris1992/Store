const React = require('react');
const Layout = require('../views/Layout.jsx');



class VendorProduct extends React.Component {
    render() {
        const user = this.props.products
        const items = this.props.items

        return (
            <Layout title={"Your Products"} id={user.id}>
                {
                    items.map(product => {
                        return (
                            <div>
                                <p>{product.productName}</p>
                                <img src={product.image} alt="Image of product" />
                            </div>

                        )
                    }
                    )}
            </Layout>

        )
    }
}

module.exports = VendorProduct;