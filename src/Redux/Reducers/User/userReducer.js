const inistailState = {
  uid: '',
  userName: '',
  isUserLogin: false,
  hobby: [],
  moreData: {
    city: '',
  },
};

const userReducer = (state = inistailState, action) => {
  switch (action.type) {
    case 'addition':
      return {
        ...state,
        uid: action.id,
      };

    case 'setUserName':
      return {
        ...state,
        userName: action.uname,
      };

    case 'setUserData':
      const {userName, uid} = action.data;
      return {
        ...state,
        uid: userName,
        userName: uid,
      };
    case 'setIsUserLogin':
      return {
        ...state,
        isUserLogin: action.isUserAuthenticate,
      };

    default:
      return state;
  }
};

export default userReducer;

// userReducer({type: 'setId', id: 1});
// userReducer({type: 'setUserName', uname: 'ratul'});
// userReducer({type: 'setUserData', data: {uid: 1, userName: 'ratul'}});
// userReducer({type: 'setIsUserLogin', isUserAuthenticate: true});
