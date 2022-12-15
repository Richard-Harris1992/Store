const React = require('react');


class Create extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to Richard's word</p>
                <p>Please take a moment to create an account!</p>

                <form action="/create" method="POST">
                    <label htmlFor="email">   Email:</label><input type="text" name="email" /><br />    
                    <label htmlFor="username">Username:</label><input type="text" name="username"/><br />
                    <label htmlFor="password">Password: </label><input type="password" name="password" /><br />
                    <label htmlFor="customer">Customer</label><input type="checkbox" name="customer"/><br />
                    <label htmlFor="vendor">  Vendor</label><input type="checkbox" name="vendor" /><br />
                          <input type="submit" value="Create my account!" />
                </form>
            </div>
        );
    }
}

module.exports = Create;