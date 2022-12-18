const React = require('react');
const Layout = require('../views/Layout.jsx');

const a = {
    textDecoration : 'none',
    color: 'black'
}
class Error extends React.Component {
    render() {
        const err = this.props.err
        const user = this.props.user
        return (
            <Layout title="Error" id={user.id}> 
                <h1>{err}</h1>
                <figure> 
                    <img src="https://github.com/Richard-Harris1992/dev-challenge-404/blob/main/404-not-found-master/Scarecrow.png?raw=true" alt="Scarecrow photo"/>
                </figure>
                <div> 
                   
                    <p>Please go back to the homepage</p>
                    <button><a style={a} href={`/${user.id}`}>Back to homepage</a></button> 
                </div>
            </Layout >
        )
    }   
}

module.exports = Error;