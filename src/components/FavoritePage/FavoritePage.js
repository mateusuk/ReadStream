import { useState, useEffect } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cards from '../Cards/Cards';

function FavoritePage(){

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favoritesFromStorage);
    }, []);

    return(
        <div>
        <Box sx={{ maxWidth: '85%', marginLeft: '12%' }}>
            <Grid
                container
                spacing={2}
                direction='row'
                marginBottom='5rem'
                marginTop='2.5rem'
                paddingTop='2rem'
            >
                {favorites.map((item) => (
                    <Grid item xs={3}>
                        <Cards 
                            key={item.id} 
                            title={item.title} 
                            author={item.author} 
                            category={item.category} 
                            link={item.link}
                            image={item.image}
                        />
                    </Grid>
                    )
                )}
            </Grid>
        </Box>
        </div>
    )
};

export default FavoritePage;