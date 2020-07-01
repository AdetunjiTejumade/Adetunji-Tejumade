import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            React.createElement('div', { className: 'footer' },
                React.createElement('div', { className: 'social-links text-center text-white' },
                    React.createElement('a', {href:"https://twitter.com/Tejumade_"},
                        React.createElement('i', { className: 'fa fa-twitter mr-8' }),
                    ),
                    React.createElement('a', {href:"https://www.linkedin.com/in/tejumade-adetunji-b1828a173"},
                        React.createElement('i', { className: 'fa fa-linkedin mr-8' }),
                    ),
                    React.createElement('a', {href:"https://github.com/AdetunjiTejumade"},
                        React.createElement('i', { className: 'fa fa-github' })
                    ),

                )
            )
        )
    }
};

export default Footer;