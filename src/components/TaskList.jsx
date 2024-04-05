import React, { useState } from 'react';
import { List, ListItem, FormControlLabel, ListItemSecondaryAction, IconButton, Checkbox, Typography, TextField, Grid } from '@mui/material';
import { deleteTask, editTask, toggleTaskCompleted } from '../redux/slices/slice';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './TaskList.css'
const TaskList = () => {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditText(tasks[index].name);
    };

    const handleSave = (index) => {
        dispatch(editTask({ index, name: editText }));
        setEditIndex(null);
        setEditText('');
        const inputField = document.getElementById(`edit-input-${index}`);
        if (inputField) {
            inputField.blur();
        }
    };

    return (
        <List className="task-list">
            {tasks.map((task, index) => (
                <ListItem key={index} className="task" style={{ boxShadow: `2px 2px 4px ${task.color}` }}>
                    <Grid container alignItems="center" className="task-info">
                        <Grid item xs={8}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={task.completed}
                                        onChange={() => dispatch(toggleTaskCompleted(index))}
                                        color="primary"
                                        style={{ color: task.color }}
                                    />
                                }
                                label={<Typography variant="body1">{task.name}</Typography>} // Move task name to Typography component
                            />
                            <Typography variant="body2" color="textSecondary">{`Due: ${task.dueDate || 'No due date'}`}</Typography> {/* Add due date text with muted color */}
                        </Grid>
                        <Grid item xs={4}>
                            {editIndex === index ? (
                                <TextField
                                    id={`edit-input-${index}`}
                                    className="edit-input"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            ) : null}
                        </Grid>
                    </Grid>
                    <ListItemSecondaryAction className="task-actions">
                        {editIndex === index ? (
                            <IconButton aria-label="save" onClick={() => handleSave(index)}>
                                <SaveIcon style={{ color: task.color }} />
                            </IconButton>
                        ) : (
                            <IconButton aria-label="edit" onClick={() => handleEdit(index)}>
                                <EditIcon style={{ color: task.color }} />
                            </IconButton>
                        )}
                        <IconButton aria-label="delete" onClick={() => dispatch(deleteTask(index))}>
                            <DeleteIcon style={{ color: task.color }} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
