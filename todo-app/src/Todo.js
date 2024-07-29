import React from 'react';

function Todo({id, task, removeTodo}) {
    return (
        <div>
            <div>{task}</div>
            <button onClick={removeTodo}>X</button>
        </div>
    );
}

export default Todo;
