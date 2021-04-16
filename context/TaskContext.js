import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] =  useState("");
    const [dragMarker, setDragMarker] = useState({});
    const [markerAppear, setMarkerAppear] = useState(false);
    const [createIconAppear, setCreateIconAppear] = useState(false)
    const [marker, setMarker] = useState([]);

    return (
        <TaskContext.Provider value={{tasks, dragMarker, setDragMarker, markerAppear, setMarkerAppear, createIconAppear, setCreateIconAppear, marker, setMarker}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;
