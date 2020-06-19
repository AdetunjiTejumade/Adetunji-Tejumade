import React, { Component } from 'react';

class navBar extends Component {
    render() {
        return (
            React.createElement('div', { className: 'text-center pt-6' },
                React.createElement('ul', { className: 'inline flex justify-center text-black font-medium' },
                    React.createElement('li', { className: 'bg-yellow-600 mr-3 px-3' }, 'About'),
                    React.createElement('li', { className: 'bg-yellow-600 mr-3 px-3' }, 'Works'),
                    React.createElement('li', { className: 'bg-yellow-600 mr-3 px-3' }, 'Contact'),
                )
            )
        );
    };
};
export default navBar;