var Nav = function Nav() {
    return React.createElement(
        "div",
        { className: "nav-bar" },
        React.createElement(
            "a",
            { className: "navbar nav-link", href: "index.html" },
            "Navbar"
        ),
        React.createElement(
            "a",
            { className: "home nav-link", href: "index.html" },
            "Home"
        ),
        React.createElement(
            "a",
            { className: "about nav-link" },
            "About Us"
        )
    );
};

var Sidebar = function Sidebar() {
    return React.createElement(
        "div",
        { className: "side-bar" },
        React.createElement(
            "a",
            { className: "links" },
            "Site1 "
        ),
        React.createElement(
            "a",
            { className: "links" },
            "Site2"
        )
    );
};

var Template = function Template(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Nav, null),
        React.createElement(
            "div",
            { className: "hello" },
            props.children
        ),
        React.createElement(Sidebar, null)
    );
};