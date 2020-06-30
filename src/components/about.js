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
                        React.createElement('p', { className: '' }, "I'm a 17 years old developer from lagos nigeria, I love solving problems and implementing great product design "
                        ),
                        React.createElement('p', {}, "I was awarded a scholarship to study to full-stack development at openclassroms by Facebook due to my perfomance in the facebook developer circles training."),
                        React.createElement('p', {}, "I'm aLso in the phase one of the google africa developer scholarship.")
                    ),
                    <div className="mt-20">
                        <Footer></Footer>
                    </div>

                )
            )
        )
    }
}

export default About;  