import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    // array destructure; names can be any name you want to call it
    // resource - contains the present value of this piece of state
    // setResource - same as calling setState; component will rerender
    // useState('posts') - set up state with initial value of posts
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;