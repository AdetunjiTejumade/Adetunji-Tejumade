import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            React.createElement('div', { className: 'footer' },
                React.createElement('div', { className:'social-links'}, 
                    React.createElement('i', {className:'fa fa-facebook-f'},),
                    React.createElement('i', {className:'fa fa-linkedin'},)
                )
            )
        )
    }
};

export default Footer;