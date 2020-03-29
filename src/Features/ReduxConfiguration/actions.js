import * as constants from './forumConstants';

const fetchPeopleRequest = () => {
  return {
    type: constants.FETCH_PEOPLE_REQUEST
  };
};
const fetchPeopleSuccess = people => {
  return {
    type: constants.SAVE_PEOPLE_SUCCESS,
    people
  };
};

export const fetchPeople = () => {
  return dispatch => {
    dispatch(fetchPeopleRequest());
    apiClient.loadPeople().then(people => {
      dispatch(fetchPeopleSuccess(people));
    });
  };
};

const savePeopleRequest = () => {
  return {
    type: constants.SAVE_PEOPLE_REQUEST
  };
};
const savePeopleFailure = error => {
  return {
    type: constants.SAVE_PEOPLE_FAILURE,
    error
  };
};
const savePeopleSuccess = people => {
  return {
    type: constants.SAVE_PEOPLE_SUCCESS,
    people
  };
};

export const savePeople = people => {
  return dispatch => {
    dispatch(savePeopleRequest());
    apiClient
      .savePeople(people)
      .then(people => {
        dispatch(savePeopleSuccess(people));
      })
      .catch(error => {
        dispatch(savePeopleFailure(error));
      });
  };
};

const apiClient = {
  loadPeople: () => {
    return {
      then: cb => {
        setTimeout(() => {
          cb(JSON.parse(localStorage.people || '[]'));
        }, 1000);
      }
    };
  },

  savePeople: people => {
    const success = !!(this.count++ % 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject(success);
        localStorage.people = JSON.stringify(people);
        resolve({ success });
      }, 1000);
    });
  },
  count: 1
};
