import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import _ from 'underscore';

import { SearchCategories } from '../SearchCategories/SearchCategories.jsx';
import { Category } from '../Category/Category.jsx';

import { styles } from '../../assets/styles/Styles';

class SelectCategory extends Component {
  constructor() {
    super();
    this.state = {
      selectedSubjects: [],
      categorySelected: false,
      categoryOpen: false
    };

    this.changeCategorySelected = this.changeCategorySelected.bind(this);
    this.changeCategoryOpen = this.changeCategoryOpen.bind(this);
    this.addSubject = this.addSubject.bind(this);
  }

  changeCategorySelected() {
    this.setState((prevState, props) => {
      return {
        categorySelected: !prevState.categorySelected
      };
    });
  }

  changeCategoryOpen() {
    this.setState((prevState, props) => {
      return {
        categoryOpen: !prevState.categoryOpen
      };
    });
  }

  addSubject(subject) {
    let newState = this.state.selectedSubjects;
    if (newState.includes(subject)) {
      newState = _.without(newState, subject);
      this.setState((prevState, props) => {
        return {
          selectedSubjects: newState
        };
      });
    } else {
      newState.push(subject);
      this.setState((prevState, props) => {
        return {
          selectedSubjects: newState
        };
      });
    }
  }

  render() {
    const { data: {allCategories = [] } = {} } = this.props;

    const noSubjectsSelected = (
      this.state.selectedSubjects.length === 0
      ) ? (
        <p className="center-block">No subjects yet. Subjects you select will appear here.</p>
      ) : null;

    return(
      <div className="container">
        <div style={styles.space} />

        <div className="row center-block">
          <div className="col-md-offset-2 col-md-8">
            <div id="title" className="text-center">
              <h2>What subjects do you want to teach?</h2>
            </div>

            <div style={styles.smallSpace} />

            <SearchCategories />

            <div className="row">
              <div className="col-md-12">
                <div id="sub-title" className="text-center">
                  <p style={styles.subtitle}>Subjects you want to teach</p>
                </div>
                <div id="seleceted-subject" style={styles.subjects}>
                  { noSubjectsSelected }
                  {
                    this.state.selectedSubjects.map((selectedSubject, index) =>
                      <p key={index} style={styles.eachSubject}>
                        <span style={{marginRight: '15px'}}>{selectedSubject}</span>
                        <a style={styles.anchorTag} onClick={() => this.addSubject(selectedSubject)}>
                          <span style={styles.eachSubjectIcon}>
                            <i className="glyphicon glyphicon-remove" />
                          </span>
                        </a>
                      </p>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.space} />
        <div id="categories">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <div className="row">
                <div id="sub-title" className="col-md-12 text-center">
                  <h4>You can also select from the categories below</h4>
                </div>
              </div>

              <div style={styles.smallSpace} />
            </div>
          </div>
          <div className="row">
            <div style={styles.padding10}>
              <div className="row" style={styles.padding10}>
                <Category
                  categories={allCategories}
                  selected={this.state.categorySelected}
                  changeState={this.changeCategorySelected}
                  addSubject={this.addSubject}
                  open={this.state.categoryOpen}
                  changeCategoryOpen={this.changeCategoryOpen}
                  selectedSubjects={this.state.selectedSubjects}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SelectCategory.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(
  gql `
    query {
      allCategories {
        id
        title
        description
        imageUrl
        SubCategories {
          id
          title
          imageUrl
          subjects
        }
      }
    }
  `
)(SelectCategory);
