import React from 'react';

function Nav(props) {
  const navList = [
    { id: 1, href: '#', title: 'Home' },
    { id: 2, href: '#', title: 'Features' },
    { id: 3, href: '#', title: 'Pricing' },
    { id: 4, href: '#', title: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GIB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navList.map((item) => (
              <li className="nav-item" key={item.id}>
                <a className="nav-link" href={`${item.href}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
