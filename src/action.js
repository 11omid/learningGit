import axios from 'axios';

export const getUsers = () => async (dispatch, getState) => {
  dispatch({
    type: 'lodaing',
    payload: { ...getState().users, loading: true },
  });
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      type: 'success',
      payload: { data: [...data], error: '', loading: false },
    });
  } catch (error) {
    dispatch({
      type: 'error',
      payload: { data: [], error: error.message, loading: false },
    });
  }
};

export const getPosts = (postId) => async (dispatch, getState) => {
  dispatch({
    type: 'lodaing2',
    payload: { ...getState().users, loading: true },
  });

  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/?userId=${postId}`
    );
    dispatch({
      type: 'success2',
      payload: { data: [...data], error: '', loading: false },
    });
  } catch (error) {
    dispatch({
      type: 'error2',
      payload: { data: [], error: error.message, loading: false },
    });
  }
};

export const getComments = () => async (dispatch, getState) => {
  dispatch({
    type: 'lodaing3',
    payload: { ...getState().users, loading: true },
  });

  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    dispatch({
      type: 'success3',
      payload: { data: [...data], error: '', loading: false },
    });
  } catch (error) {
    dispatch({
      type: 'error3',
      payload: { data: [], error: error.message, loading: false },
    });
  }
};
