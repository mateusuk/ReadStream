import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Footer = () => {
    return (
            <Container 
                maxWidth="xl"
                sx={{ 
                        mt: 'auto', 
                        backgroundColor: "blue", 
                        borderTop: 1, 
                        width: '100%'}} 
            >
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid 
                        container
                        direction="row" 
                        justifyContent="center"
                        alignItems="center" 
                    >
                        <AutoStoriesIcon 
                            sx={{ 
                                display:'flex', 
                                mr: 1, color: 'whitesmoke', 
                                fontSize: 14 }} 
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="p"
                            // href="/"
                            sx={{
                                pb: 1,
                                pt: 1,
                                display: 'flex',
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.2rem',
                                color: 'whitesmoke',
                                textDecoration: 'none',
                                fontSize: 14,
                            }}
                        >
                        ReadStream
                        </Typography>
                    </Grid>
                    <Grid 
                        container
                        direction="row" 
                        justifyContent="center"
                        alignItems="center" 
                        sx={{ 
                            borderTop: 1, 
                            width: '350px', 
                            pt: 1, 
                            pb: 1, 
                            color: 'whitesmoke'}}>
                        <Typography 
                            sx={{
                                fontSize: 14, 
                                fontFamily: 'monospace',}}
                                >
                                    ©2023 ReadStream. All rights reserved
                        </Typography>
                    </Grid>
                </Grid>
            </Container> 
    );
};

export default Footer;