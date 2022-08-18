
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Voluneer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Voluneer = () => {
    const [service, setService] = useState({});
    console.log(service);
    const { volunteerId } = useParams();
    const { name } = service

    useEffect(() => {
        const url = `https://quiet-earth-89522.herokuapp.com/services/${volunteerId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (

        <>
            <Card className='mx-auto'>
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
                        {/* <TextField id="standard-basic" label={name} variant="standard" /> */}
                        <h4 className='text-secondary text-uppercase'>{name}</h4>
                        <Button variant="contained" className='registerBtn'>
                            Disable elevation
                        </Button>
                    </Box>
                </Card.Body>
            </Card>
        </>
    );
};

export default Voluneer;