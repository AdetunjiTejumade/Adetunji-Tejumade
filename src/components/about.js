import React from 'react';
import Header from './header'
import Footer from './footer'

class About extends React.Component {
    render() {
        return (
            React.createElement('div', { className: 'bg-body' },
                <Header></Header>,
                React.createElement('div', { className: 'text-white text-center mt-16 px-6 max-w-xl m-auto' },
                    React.createElement('h1', { className: 'text-3xl text-yellow' }, "HEY THERE, I'M TEJU- A WEB DEVELOPER"),
                    React.createElement('hr', { className: 'border-2 border-yellow-600 mt-3 mb-3 w-6 m-auto' }),

                    React.createElement('div', { className: 'mt-12 text-white' },
                        React.createElement('p', { className: '' }, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum dolores impedit, consectetur ullam repellendus. Explicabo quae odit culpa, eveniet perferendis quos et deleniti temporibus, adipisc maxime libero dolorum porro accusantium sint rem vitae nostrum dolor excepturi aliquam unde cupiditate!'
                        ),

                    ),
                    <Footer></Footer>

                )
            )
        )
    }
}

export default About;  