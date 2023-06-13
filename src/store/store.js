import {configureStore} from '@reduxjs/toolkit';
import {commonSlice} from './common/common.slice';
import {gameSlice} from './game/game.slice';
import {verbsSlice} from './verbs/verbs.slice';

export const createConfigureStore = (initState = {}) =>
  configureStore({
    reducer: {
      common: commonSlice.reducer,
      verbs: verbsSlice.reducer,
      game: gameSlice.reducer
    },
    preloadedState: initState,
  });

export const store = createConfigureStore();
