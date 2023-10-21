import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './taskReducer';

const store = createStore(taskReducer);

const App = () => {
    return (
        <Provider store={store}>
            {/* sdaasd */}
        </Provider>
    );
};

export default App;