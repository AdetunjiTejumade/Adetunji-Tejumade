import React from 'react';
import Header from './header'
import Footer from './footer'

class Contact extends React.Component {
    render() {
        return (
            React.createElement('div', {},
                <Header></Header>,
                React.createElement('div', {className:"text-white text-center mt-16 px-6"},
                    React.createElement('h1', {className:"text-3xl text-yellow"},
                        "LETS' GET IN TOUCH."
                    ),
                    React.createElement('hr', {className:"border-2 mt-3 mb-3 w-6 m-auto"}),
                    React.createElement('h3', {}, 'LINKEDIN'),
                    <Footer></Footer>
                ))
        )
    }
}

export default Contact;