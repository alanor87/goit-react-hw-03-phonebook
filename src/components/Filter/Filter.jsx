import React from "react";
import PropTypes from "prop-types";
import styles from './Filter.module.css';

class Filter extends React.Component {
  render() {
    return (
      <div className={styles["filter"]}>
        <label className={styles["filter-label"]}>
          Find contacts by name
          <br />
          <input
            className={styles["filter-input"]}
            type="text"
            onChange={this.props.filterHandler}
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterHandler: PropTypes.func
};

export default Filter;
