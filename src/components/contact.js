import React from 'react';
import Header from './header'
import Footer from './footer'

class Contact extends React.Component {
    render() {
        return (
            React.createElement('div', {},
                <Header></Header>,
                React.createElement('div', { className: "text-white text-center mt-16 px-6" },
                    React.createElement('h1', { className: "text-3xl text-yellow" },
                        "LETS' GET IN TOUCH."
                    ),
                    React.createElement('hr', { className: "border-2 mt-3 mb-3 w-6 m-auto" }),
                    React.createElement('a', {className:"font-semibold", href:"mailto:tejumadeadetunji@gmail.com"}, 'tejumadeadetunji@gmail.com'),

                ),
                React.createElement('div', { className: "contact px-6 mt-16 text-center" },
                    <div className="">
                        {React.createElement('a', { className: "font-bold text-2xl text-yellow ", href:"https://linkedin.com/in/tejumade-adetunji" }, 'LINKEDIN')}
                        {/* <hr className="contact-hr"></hr> */}
                        {/* <a href="https://linkedin.com/in/tejumade-adetunji" className="ml-3 font-semibold">linkedin.com/in/tejumade-adetunji</a> */}
                    </div>,
                    <div className="mt-12"> 
                        {React.createElement('a', { className: "font-bold text-2xl text-yellow", href:"https://github.com/AdetunjiTejumade" }, 'GITHUB')}
                        {/* <hr className="contact-hr"></hr> */}
                        {/* <a href="https://github.com/AdetunjiTejumade" className="ml-3 font-semibold">github.com/AdetunjiTejumade</a> */}
                    </div>,
                    <div className="mt-12">
                        {React.createElement('a', { className: "font-bold text-2xl text-yellow", href:"https://twitter.com/@tejumade__/" }, 'TWITTER')}
                        {/* <hr className="contact-hr"></hr> */}
                        {/* <a href="https://twitter.com/@tejumade__/" className="ml-3 font-semibold">twitter.com/@tejumade__/</a> */}
                    </div>,
                    <Footer></Footer>)
            )
        )
    }
}

export default Contact;