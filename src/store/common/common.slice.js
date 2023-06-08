import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modal: {
    name: null,
    data: null,
  },
  reserveModal: [],
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    SHOW_MODAL: (state, action) => {
      const {name, data} = action.payload;
      if (state.modal.name) {
        state.reserveModal = [...state.reserveModal, action.payload];
      } else {
        state.modal = {name, data};
      }
    },
    HIDE_MODAL: state => {
      if (state.reserveModal.length > 0) {
        state.modal = state.reserveModal.shift();
      } else {
        state.modal = {name: null, data: null};
      }
    },
  },
});

export const {SHOW_MODAL, HIDE_MODAL} = commonSlice.actions;
