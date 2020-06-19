import React from 'react';
import Header from './header'
class About extends React.Component {
    render() {
        return (
            React.createElement('div', { className: 'bg-black px-6' },
                <Header></Header>,
                React.createElement('div', { className: 'text-white text-center mt-16' },
                    React.createElement('h1', { className: 'text-3xl' }, "HEY THERE, I'M TEJU- WEB DEVELOPER"),
                    React.createElement('hr', { className: 'border-2 border-yellow-600 mt-3 mb-3 w-6 m-auto' }),

                    React.createElement('div', { className: '' }, React.createElement('p', { className: '' }, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum dolores impedit, consectetur ullam repellendus. Explicabo quae odit culpa, eveniet perferendis quos et deleniti temporibus, adipisc maxime libero dolorum porro accusantium sint rem vitae nostrum dolor excepturi aliquam unde cupiditate!'),

                    )
                )
            )
        )
    }
}

export default About;  