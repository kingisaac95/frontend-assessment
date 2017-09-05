import React, { Component } from 'react';
import _ from 'underscore';

import { SearchCategories } from '../SearchCategories/SearchCategories.jsx';
import { SubCategory } from '../SubCategory/SubCategory.jsx';
import { Category } from '../Category/Category.jsx';

import { styles } from '../../assets/styles/Styles';

export class SelectCategory extends Component {
  constructor() {
    super();
    this.state = {
      selectedSubjects: ['Christian Religious Studies', 'Civic Education', 'Agricultural Science'],
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
                  selected={this.state.categorySelected}
                  changeState={this.changeCategorySelected}
                />
                <SubCategory
                  addSubject={this.addSubject}
                  open={this.state.categoryOpen}
                  changeState={this.changeCategoryOpen}
                  selected={this.state.selectedSubjects}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
