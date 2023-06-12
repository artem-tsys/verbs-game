import {createSlice} from '@reduxjs/toolkit';
import {difference} from 'lodash';

const initialState = {
  round: 1,
  type: 'writing', // 'writing' || 'speaking'
  learningIds: [],
  learnedIds: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLearningIds: (state, {payload}) => {
      if(Array.isArray(payload)) {
        state.learningIds = payload;
      }
    },
    addLearned: (state, {payload}) => {
      if(Array.isArray(payload)) {
        state.learnedIds = [...state.learnedIds, ...payload]
      } else {
        state.learnedIds = [...state.learnedIds, payload]
      }
    },
    deleteLearned: (state, {payload}) => {
      state.learnedIds = difference(state.learnedIds, payload)
    },
    setType: (state, {payload}) => {
      state.type = payload;
    },
    nextRound: (state) => {
      state.round += 1;
    },
    resetRound: (state) => {
      state.round = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('resetGame', (state) => {
      state.round = 1;
      state.learnedIds = [];
    })
  }
})

export const {
  setLearningIds,
  addLearned,
  deleteLearned,
  setType,
  nextRound,
  resetGame
} = gameSlice.actions;
