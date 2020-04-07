import * as types from "./constants";

export const alertHandler = () => (dispatch) => {
  let url = `https://reqres.in/api/${types.USER}/1`;
  fetch(url).then(resp => {
    resp.json().then(data => {
      console.log("AlertData", data.data)
      dispatch({
        type: types.USER,
        data: data
      });
    });
  });
};

export const loginRequest = (user) => (dispatch)  => {
  fetch(`https://node-rest-api-crud.herokuapp.com/notes`
  , {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  }
  ).then((resp) => {
    localStorage.setItem("loginUser", user.name);
    resp.json(data => {
      dispatch({
        type: types.LOGIN_REQUEST_SUCCESS,
        data: data
      })
    })
  }).catch(err => {
    dispatch({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: err
    })
  })
}

export const userData = () =>  (dispatch) => {
  let url = `https://node-rest-api-crud.herokuapp.com/notes/5e8855faf6e2fa0017c97902`
  fetch(url).then(resp => {
    resp.json().then(data => {
      dispatch({
        type: types.PROFILE_REQUEST_SUCCESS,
        data: data
      });
    });
  });
}

export const updateUserData = (user) => (dispatch) => {
  console.log(user)
  let url = `https://node-rest-api-crud.herokuapp.com/notes/5e8855faf6e2fa0017c97902`;
  return fetch(url, {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(resp => {
    resp.json(data => {
      console.log("Data ", data)
      dispatch({
        type: types.PROFILE_UPDATE_SUCCESS,
        payload: data
      })
    })
  }).catch(err => {
    dispatch({
      type: types.PROFILE_UPDATE_FAILURE,
      payload: err
    })
  })
}