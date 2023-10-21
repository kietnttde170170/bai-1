import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './type';

const initialState = {
    tasks: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case UPDATE_TASK:
            const { taskId, updatedTask } = action.payload;
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, ...updatedTask };
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks,
            };
        case DELETE_TASK:
            const filteredTasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
            return {
                ...state,
                tasks: filteredTasks,
            };
        default:
            return state;
    }
};

export default taskReducer;