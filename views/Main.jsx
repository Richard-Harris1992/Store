const React = require('react');

class Main extends React.Component  {
    render() {
    return (
             <div>
                <p>Welcome to Richards amazing imporium of stuff. Here is strive to give you the most bang for your buck <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, voluptatem. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quisquam. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo.
                </p>
                 <button><a href="/login">Sign In</a> </button>
                 <button><a href="/create">Create Account</a></button>
            </div>
        );
    }
}

module.exports = Main;