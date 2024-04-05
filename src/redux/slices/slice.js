import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const { name, priority, dueDate } = action.payload;
            let color;
            switch (priority) {
                case 'high':
                    color = '#f44336'; // Red
                    break;
                case 'medium':
                    color = '#ff9800'; // Orange
                    break;
                case 'low':
                    color = '#4caf50'; // Green
                    break;
                default:
                    color = '#000000'; // Black
            }
            state.push({ name, completed: false, priority, color, dueDate });
        },
        deleteTask: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        },
        toggleTaskCompleted: (state, action) => {
            const task = state[action.payload];
            task.completed = !task.completed;
        },
        editTask: (state, action) => {
            const { index, name } = action.payload;
            state[index].name = name;
        },

        setSearchTerm: (state, action) => { // Add setSearchTerm reducer
            state.searchTerm = action.payload;
        }
    },
});

export const { addTask, deleteTask, toggleTaskCompleted, setSearchTerm, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
