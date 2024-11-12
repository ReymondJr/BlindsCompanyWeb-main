const React = require('react');
const Layout = require('./src/templates/Layout').default;

module.exports.wrapPageElement = ({ element, props }) => {
    return <React.Fragment>{element}</React.Fragment>;
};

module.exports.wrapRootElement = ({ element }) => element;
