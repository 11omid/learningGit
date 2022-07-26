export const users = (
  state = {
    data: [],
    loading: false,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case 'loading':
      return action.payload;
    case 'success':
      return action.payload;
    case 'changeName':
      return action.payload;
    case 'error':
      return action.payload;

    default:
      return state;
  }
};

export const posts = (
  state = {
    data: [],
    loading: false,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case 'loading2':
      return action.payload;
    case 'success2':
      return action.payload;

    case 'error2':
      return action.payload;

    default:
      return state;
  }
};

export const comments = (
  state = {
    data: [],
    loading: false,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case 'loading3':
      return action.payload;
    case 'success3':
      return action.payload;

    case 'error3':
      return action.payload;

    default:
      return state;
  }
};
