import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, updateTask } from './taskActions';

const TaskForm = ({ addTask, updateTask, taskToEdit }) => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskToEdit) {
            updateTask(taskToEdit.id, { title });
        } else {
            addTask({ title });
        }

        setTitle('');
    };

    return (
        <div>
            <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleTitleChange} />
                <button type="submit">{taskToEdit ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        taskToEdit: state.taskToEdit,
    };
};

export default connect(mapStateToProps, { addTask, updateTask })(TaskForm);