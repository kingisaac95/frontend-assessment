import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from '../../assets/styles/Styles';

export class SubCategory extends Component {
  constructor() {
    super();

    this.state = {
      subjects: ['General Mathematics', 'Quantitative Reasoning']
    };
  }

  render() {
    const iconClass = this.props.open ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down';
    return (
      <div className="col-md-5 pull-right sub-category-pane" style={styles.subCategoryWrapper}>
        <div className="sub-category">
          <a
            data-toggle="collapse"
            data-target="#content"
            style={styles.subCategory}
            onClick={() => this.props.changeState()}
          >
            <div id="image-icon" style={styles.categoryItem}>
              <img src={require("../../assets/img/sub-category.png")} height="40" alt="image-icon" />
            </div>
            <div style={styles.categoryItem}>
              <h5>Elementary & Kindergarten</h5>
            </div>
            <div style={styles.chevronRight}><i className={iconClass} /></div>
          </a>

        </div>
        <div id="content" className="collapse">
          {
            this.state.subjects.map((subject, index) =>
              <div key={index} style={styles.subCategoryContent} >
                <div className="checkbox">
                  <label>
                    <input type="checkbox" checked={this.props.selected.includes(subject)} onChange={() => this.props.addSubject(subject)}/>
                    <span style={styles.subCategoryContentTitle}>{subject}</span>
                  </label>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

SubCategory.propTypes = {
  addSubject: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selected: PropTypes.array.isRequired,
};

