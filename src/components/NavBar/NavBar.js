import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className={styles.NavBar}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
