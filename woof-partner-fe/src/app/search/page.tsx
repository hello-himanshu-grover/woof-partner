"use client"
import React from 'react'
import { Container, Divider, Grid, Link } from '@mui/material'
import ListingCard from '../components/ListingCard'
import DogTestData from "../testData"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://woofpartner.com/">
                Woof Partner
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function page() {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Woof Partner
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Container component="main" sx={{ py: 8 }}>
                    <Grid container spacing={2}>
                        {DogTestData.map((pet, idx) => (
                            <Grid key={idx} item lg={3} md={4} sm={6} xs={12}>
                                <ListingCard {...pet} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container>
                        <Typography variant="body1">
                            Privacy | Terms & Policy | Contact | Feedback
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </>
    )
}
