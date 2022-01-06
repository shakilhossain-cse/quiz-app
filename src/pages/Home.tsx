import { Box, Typography, TextField, MenuItem, Button, FormControl, InputLabel, Select, Alert } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface UserInfo {
    name: string,
    gender: string,
    language: string
}
const Home: React.FC = () => {
    const navigation = useNavigate();
    const [user, setUser] = useState<UserInfo>({
        name: '', gender: '', language: ''
    });
    const [error, setError] = useState<boolean>(false)
    const handleChange = (event: { target: { name: string, value: string } }) => {
        const { name, value } = event.target;
        const newUser = { ...user, [name]: value }
        setUser(newUser);
    };
    console.log(user);
    const onSubmit = (): void => {
        if (user.name !== '' && user.gender !== "" && user.language !== "") {
            navigation('/exam', { state: user })
        } else {
            setError(true)
        }
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box>
                <Typography variant="h3">Welcome to Quiz</Typography>
                <Box sx={{ mt: 5 }}>
                    {error && <Alert severity="warning" sx={{mb:2}}>Fill all the blanks</Alert>}
                    <TextField
                        label="Your Name"
                        name='name'
                        onChange={handleChange}
                        value={user.name}
                        fullWidth
                    />
                    <FormControl sx={{ mt: 2 }} fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user.gender}
                            label="Gender"
                            name='gender'
                            onChange={handleChange}
                        >
                            <MenuItem value="male">male</MenuItem>
                            <MenuItem value="female">female</MenuItem>

                        </Select>
                    </FormControl>
                    <FormControl sx={{ mt: 2 }} fullWidth>
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user.language}
                            label="language"
                            name="language"
                            onChange={handleChange}
                        >
                            <MenuItem value="javascript">javascript</MenuItem>
                            <MenuItem value="nodejs">nodejs</MenuItem>

                        </Select>
                    </FormControl>
                    <Button variant="contained" color="success" sx={{ mt: 2 }} onClick={onSubmit} fullWidth>
                        Start quiz
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;
