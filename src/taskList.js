import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from './taskActions';

const TaskList = ({ tasks, deleteTask }) => {
    return (
        <div>
            <h2>Task List</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <span>{task.title}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};

export default connect(mapStateToProps, { deleteTask })(TaskList);