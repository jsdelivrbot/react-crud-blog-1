import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.match.params.id;
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        Posts Show!
      </div>
    );
  };
}

function mapStateToProps({ posts }) {

}

export default connect(null, { fetchPost })(PostsShow);