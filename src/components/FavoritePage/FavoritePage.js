import { useState, useEffect } from 'react';
import React from 'react';
import './FavoritePage.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cards from '../Cards/Cards';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

function FavoritePage(){

    const [favorites, setFavorites] = useState([]);

    const books = JSON.parse(localStorage.getItem('favorites')) || [];

    useEffect(() => {
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favoritesFromStorage);
    }, []);

    const heading = books.length ? "Here's a list of your favorite books:" : "Hi, you don't have any favorite books yet. Go to the search page and add some!";

    return(
        <motion.div 
            className="results-container"
            intial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100, transition: {duration: 0.5}}}
        >
             <Typography component={'p'} className='FavoritesText'>
                {heading}
            </Typography>

            <Box sx={{ maxWidth: '85%', marginLeft: '12%' }}>
                <Grid
                    container
                    // ref={scrollToRef}
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
                                author={item.authors} 
                                category={item.categories} 
                                link={item.previewLink}
                                image={item.image}
                            />
                        </Grid>
                        )
                    )}
                </Grid>
            </Box>
        </motion.div>
    )
};

export default FavoritePage;