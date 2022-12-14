const React = require('react');

class Login extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to Richard's word</p>
                <p>Please Log into your accout</p>

                <form action="/login" method="POST">
                    <label htmlFor="email">Email:</label> <input type="text" name="email" /><br />
                    <label htmlFor="password">Password:</label><input type="text" name="password" /><br />
                    <input type="submit" value="Log in" />
                </form>
            </div>
        );
    }
}

module.exports = Login;