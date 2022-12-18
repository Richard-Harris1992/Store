const React = require('react');

const p = {
    fontSize : '20px',
    lineHeight: '1.5',
    color: 'white'
}

const body = {
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '100px',
    marginRight: '100px',
    marginTop: '100px'
}

const div = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '1000px'
}

const button = {
    borderRadius : '1.5rem',
    backgroundColor: 'grey',
}

const a = {
    textDecoration: 'none',
    color: 'white'
}
class Main extends React.Component  {
    render() {
    return (
        <body style={body}>
             
                <blockquote style={p}>Welcome to Richard's World online! We are a premier destination for all your shopping needs, 
                    offering a wide selection of high-quality products at affordable prices. From groceries and household essentials to clothing and gifts,
                    we have everything you need to make your life easier and more enjoyable. 
                    At Richard's World, we are committed to providing the best shopping experience possible. 
                    Our user-friendly website makes it easy for you to browse and purchase products from the comfort of your own home. 
                    And with fast and reliable shipping, you can have your items delivered right to your doorstep.
                    Thank you for choosing Richard's World for your online shopping needs. 
                    We hope you have a great experience with us and look forward to serving you in the future.
                </blockquote>
                <div style={div}>
                    <button style={button}><a style={a} href="/login">Sign In</a> </button>
                    <button style={button}><a style={a} href="/create">Create Account</a></button>
                </div>
            
        </body>
        );
    }
}

module.exports = Main;