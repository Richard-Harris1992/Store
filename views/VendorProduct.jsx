const React = require('react');
const Layout = require('../views/Layout.jsx');




class VendorProduct extends React.Component {
    render() {
        const product = this.props.product
        const user = this.props.user
        return (
            <Layout title={"Your Products"} id={user.id}>
                {
                    product.map(item => {
                        return(
                                                 
                               <div>
                                    <p>Name : {item.productName}</p>
                                    <img src={item.image} alt="Product Image" />
                                    <form action={`/${user.id}/${item.id}/edit`} method="GET">
                                        <input type="submit" value="Edit Item" />
                                    </form>
                                    <form action={`/${user.id}/myProducts?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete Item" />
                                    </form>
                                   
                                </div>
                        )
                    })    
                
                }
                    
            </Layout>

        )
    }
}

module.exports = VendorProduct;