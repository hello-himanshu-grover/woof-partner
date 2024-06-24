"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
    imgSrc: string,
    name: string,
    breedName: string,
    age: number
}

export default function ListingCard(props: Props) {
    const { imgSrc, name, breedName, age } = props;
    return (
        <Card sx={{'.MuiCardMedia-img': {aspectRatio: "16 / 9"}}} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={imgSrc}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {breedName} | {age}yr
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
