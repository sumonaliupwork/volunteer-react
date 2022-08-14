import React from 'react';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Voluneer.css';
import { useParams } from 'react-router-dom';

const Voluneer = () => {
    const { id } = useParams();
    return (

        <Card className='mx-auto'>
            <h2>user Id: {id}</h2>
            <Card.Body className='volunteer'>
                <Card.Title className='title'>Register as a Volunteer</Card.Title>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="standard-basic" label="Full Name" variant="standard" />
                    <TextField id="standard-basic" label="Username or Email" variant="standard" />
                    <TextField id="standard-basic" label="Date" variant="standard" />
                    <TextField id="standard-basic" label="Description" variant="standard" />
                    <TextField id="standard-basic" label="Value show" variant="standard" />
                    <Button variant="contained" className='registerBtn'>
                        Disable elevation
                    </Button>
                </Box>
            </Card.Body>
        </Card>
    );
};

export default Voluneer;