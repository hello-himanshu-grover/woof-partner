"use client"
import * as React from 'react';
import { Paper, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ListingCard from "./ListingCard"
import DogTestData from "../testData"

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 1rem + 5.3333vw, 4rem)',
            }}
          >
            Find a&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(2rem, 1rem + 5.3333vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Partner</Typography>
            &nbsp;for your&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(2rem, 1rem + 5.3333vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Pet
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Connect your furry friend with their perfect companion through our matchmaking service tailored for pets. Discover meaningful lasting bonds for your beloved pet today.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Search By Dog Breed"
              placeholder="Search By Dog Breed"
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Search By Dog Breed',
              }}
            />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            <Link href="/auth/signup" color="primary">
              Or make a profile for your stunning pet now!
            </Link>
          </Typography>
        </Stack>
        <Paper variant="outlined" sx={{ mt: 8, p: 2 }}>
          <Grid container spacing={2}>
            {DogTestData.map(pet => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <ListingCard {...pet} />
              </Grid>
            ))}
          </Grid>
          <Box mt={2} textAlign="center">
            <Link href="/search">
              <Button variant="text">Show More</Button>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}