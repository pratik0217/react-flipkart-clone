import {configureStore} from '@reduxjs/toolkit';
import counterCartReducer from './features/cartItem';

const store = configureStore({
    reducer: {
        counterCart : counterCartReducer
    }
});

export default store;