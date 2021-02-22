import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { configs } from './configs';
import { categories } from './categories';
import { contents } from './contents';
import { posts } from './posts';
import { notes } from './notes';
import { refs } from './refs';
import { feedback } from './feedback';
import { flow } from './flow';
import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';
// import { AsyncStorage } from '@react-native-community/async-storage';
// import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native';

export const ConfigureStore = () => {

    const config = {
        key: 'root',
        debug: true,
        storage: AsyncStorage
      }
    
    const store = createStore(
        persistCombineReducers(config, {
            configs,
            categories,
            contents,
            refs,
            notes,
            feedback,
            flow,
            posts
        }),
        // applyMiddleware(thunk, logger)
        applyMiddleware(thunk)
    );

    const persistor = persistStore(store)

    return { persistor, store };
}
