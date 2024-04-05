import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/slice';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const TaskInput = () => {
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("low");
    const [dueDate, setDueDate] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ name: input, priority, dueDate }));
        setInput("");
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        label="New task"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Priority</InputLabel>
                        <Select
                            value={priority}
                            onChange={e => setPriority(e.target.value)}
                            label="Priority"
                        >
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        type="date"
                        value={dueDate || ''}
                        onChange={e => setDueDate(e.target.value)}
                        label="Due Date"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default TaskInput;
