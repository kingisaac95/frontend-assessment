import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from '../../assets/styles/Styles';

export class Category extends Component {
  onClick() {
    this.props.changeState();

    if ($('.sub-category-pane').is(':hidden')) {
      $('.sub-category-pane').show('slide', { direction: 'left'}, 500);
    } else {
      $('.sub-category-pane').hide('slide', { direction: 'left'}, 500);
    }
  }
  render() {
    const classessToBeUsed = !this.props.selected ? 'col-md-8 col-md-offset-2' : 'col-md-7';
    return (
      <div className={classessToBeUsed}>
        <a href="#" style={styles.category} className="category" onClick={() => this.onClick()}>
            <div id="image-icon" style={styles.categoryItem}>
              <img src={require("../../assets/img/code.png")} height="50" alt="image-icon" />
            </div>
            <div id="category" style={styles.categoryItem}>
              <h4 style={styles.capitalize}>Academic Subjects</h4>
              <p>Like Maths, English, Physics, Chemistry, Futher Maths</p>
            </div>

            <div style={styles.chevronRight}><i className="glyphicon glyphicon-chevron-right" /></div>
        </a>
      </div>
    );
  }
}

Category.propTypes = {
  changeState: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
