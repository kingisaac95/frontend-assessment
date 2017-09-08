import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SubCategory } from '../SubCategory/SubCategory.jsx';
import { styles } from '../../assets/styles/Styles';

export class Category extends Component {
  onClick(element) {
    this.props.changeState();
    console.log(element + 'was clicked');
    if ($(`.${element}`).is(':hidden')) {
      $(`.${element}`).show('slide', { direction: 'left'}, 500);
    } else {
      $(`.${element}`).hide('slide', { direction: 'left'}, 500);
    }
  }
  render() {
    const classessToBeUsed = !this.props.selected ? 'col-md-8 col-md-offset-2' : 'col-md-7';
    const { categories } = this.props;

    return (
      <div>
          {
            categories.map((category, key) => {
              return (
                <div key={key}>
                  <div className={classessToBeUsed}>
                    <a href="#" style={styles.category} onClick={() => this.onClick(`category${key}`)}>
                      <div id="image-icon" style={styles.categoryItem}>
                        <img src={require("../../assets/img/code.png")} height="50" alt="image-icon" />
                      </div>
                      <div id="category" style={styles.categoryItem}>
                        <h4 style={styles.capitalize}>{category.title}</h4>
                        <p>{category.description}</p>
                      </div>

                      <div style={styles.chevronRight}><i className="glyphicon glyphicon-chevron-right" /></div>
                    </a>
                  </div>

                  <SubCategory
                    categoryKey={`category${key}`}
                    subCategories={category.SubCategories}
                    addSubject={this.props.addSubject}
                    open={this.props.open}
                    changeState={this.props.changeCategoryOpen}
                    selected={this.props.selectedSubjects}
                  />
                </div>
              );
            })
          }
        </div>
     );
  }
}

Category.propTypes = {
  changeState: PropTypes.func.isRequired,
  addSubject: PropTypes.func.isRequired,
  changeCategoryOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  selectedSubjects: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};
