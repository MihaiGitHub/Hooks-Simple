import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
    // Initialize state to empty [] and have access to state with variable resources
    const [resources, setResources] = useState([]);

    const fetchResource = async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        // Set state with new resources
        setResources(response.data);
    };

    // Anytime this component gets rendered or updated this runs
    // Decides wheather or not the function will get invoked based on if the array changes
    // Exception with objects which are different in memory even if they look the "same"
    useEffect(
        () => {
            // Argument is resource passed to this component
            fetchResource(resource);
        }, 
        [resources] // If arguments inside this array are different, the arrow function above will be called
    );

    return (
        <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
    );
    
}

export default ResourceList;