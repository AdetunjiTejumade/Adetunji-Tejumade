import React from 'react';
import Header from './header'

import item_1 from '../images/portfolio/img_01a.png'
import item_2 from '../images/portfolio/item_2.jpg'
import Footer from './footer';

class Works extends React.Component {
    render() {
        return (

            React.createElement('div', {},
                <Header></Header>,
                React.createElement('div', { className: "mt-16 px-6 m-auto max-w-xl" },
                    React.createElement('div', {},
                        React.createElement('h1', { className: "text-center text-3xl text-yellow" }, 'MY WORKS'
                        )),
                    React.createElement('div', { className: "works mt-12 text-white font-normal" },

                        React.createElement('div', { className: "item shadow-xl" },
                            React.createElement('div', { className: "" },
                                <img src={item_1} alt="portfolio-item"></img>
                            ),
                            React.createElement('div', { className: "description p-3" },
                                <p>This is one of the project i worked on in the front-end mentor challenge. Built using Tailwind css</p>
                            )
                        ),
                        React.createElement('div', { className: "item shadow-xl mt-6 " },
                            React.createElement('div', { className: "" },
                                <img src={item_2} alt="portfolio-item"></img>
                            ),
                            React.createElement('div', { className: "description p-3" },
                                <p>This is a website for WATCH IT OUTSIDE BOSTON outdoor event, it allows users to make reservations for the event</p>
                            )),
                        React.createElement('div', { className: 'mt-12 text-center mb-12' },
                            React.createElement('a', { className: '', href:'https://github.com/AdetunjiTejumade' },
                                'OTHER PROJECTS ON GITHUB>>'
                            )

                        ))
                    ),
                    <div className="mb-6">
                         <Footer></Footer>
                    </div>
                   

                )
            )
    }
}

export default Works;