import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/slice';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const TaskInput = () => {
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("low");
    const [dueDate, setDueDate] = useState(null); // Ensure dueDate is initialized properly
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ name: input, priority, dueDate }));
        setInput(""); // Clear input field after submitting
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <TextField value={input} onChange={e => setInput(e.target.value)} placeholder="New task" />
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel>Priority</InputLabel>
                        <Select value={priority} onChange={e => setPriority(e.target.value)}>
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <TextField type="date" value={dueDate || ''} onChange={e => setDueDate(e.target.value)} /> {/* Ensure dueDate is not null */}
                </Grid>
                <Grid item>
                    <Button type="submit">Add Task</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default TaskInput;
