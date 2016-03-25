import * as types from '../actions/action-types';
import _ from 'lodash';

const initialUserState = {
  users: [],
  userProfile: {
    repos: []
  }
};

const userReducer = function(state = initialUserState, action) {

  switch(action.type) {

    case types.USER_LIST_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.DELETE_USER_SUCCESS:

      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(state.users, user => user.id != action.userId);
      return Object.assign({}, state, { users: newUsers });

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

  }

  return state;

}

export default userReducer;
