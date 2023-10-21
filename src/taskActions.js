import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './type';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const updateTask = (taskId, updatedTask) => {
    return {
        type: UPDATE_TASK,
        payload: {
            taskId,
            updatedTask,
        },
    };
};

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        payload: taskId,
    };
};