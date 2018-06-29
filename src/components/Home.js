import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
/*
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
*/

class Home extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
};


export default hot(module)(Home);

/*

function mapStateToProps (state, ownProps) {
  return {
    feedList: state.userDynamic.recipies,
  }
}

export default connect(mapStateToProps, 
  (dispatch) => ({
    actions: bindActionCreators({
      ...actions
    }, dispatch)
  })
  )(Home)

  */