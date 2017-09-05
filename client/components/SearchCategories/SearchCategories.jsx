import React, { Component } from 'react';

export class SearchCategories extends Component {
  render() {
    const styles = {
      input: {
        width: '100%',
        height: '60px',
        fontSize: '16px',
        padding: '10px',
      }
    };

    return (
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            style={styles.input}
            placeholder="Type here to search for what you want to teach" />
        </div>
          {/* <input type="text" value="İstanbul, Adıyaman, Adana, Urfa" data-role="tagsinput" className="form-control" /> */}
      </div>
    );
  }
}
