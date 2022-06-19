import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Welcome from 'components/Welcome/Welcome'

const Home = () => (
  <div className={styles.Home}>
    <Welcome />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
