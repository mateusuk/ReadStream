import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, StyledEngineProvider } from '@mui/material/styles';
import './Cards.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
}));

function Cards(props) {
  const [expanded, setExpanded] = React.useState(false);

  // code to save card in localstorage
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some(favorite => favorite.title === props.title);

    if (!isAlreadyFavorite) {
      favorites.push(props);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      const updatedFavorites = favorites.filter(favorite => favorite.title !== props.title);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    }
  }

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some(favorite => favorite.title === props.title);
    setIsFavorite(isAlreadyFavorite);
  }, [props.title]);

// -----------------------------------------------------------------------------------
  const handleExpandClick = () => {
    setExpanded(!expanded);   
  };

  if(props.image !== undefined && props.link !== undefined) {
    return (
      <StyledEngineProvider injectFirst>
        <Card className='card' sx={{ maxWidth: 200, minHeight: 200}}>
          <CardMedia 
            component='img'
            image={props.image}
            alt='book card'
          />
          <CardActions disableSpacing>
            <IconButton 
              aria-label='add to favorites'
              onClick={handleFavoriteClick}
              color={isFavorite ? 'error' : 'default'}
            >
              <FavoriteIcon />
            </IconButton>
            <ExpandMore 
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent  sx={{textAlign: 'center'}}>
                <Typography className='title'>{props.title}</Typography>
                <Typography className='author'>{props.author}</Typography>
                <Typography paragraph sx={{textAlign: 'justify', paddingTop: '5px'}}>
                    {props.description}
                </Typography>
                <Button href={props.link} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        >
                        Preview
                </Button>
              </CardContent>
            </Collapse>
        </Card>
      </StyledEngineProvider>
    );
  }

  
}

export default Cards;