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

function Cards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);   
  };

  return (
    <StyledEngineProvider injectFirst>
      <Card sx={{ maxWidth: 200, m: '7rem' }}>
        <CardMedia
          component='img'
          image='https://picsum.photos/200'
          alt='book card'
        />
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
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
            <CardContent sx={{textAlign: 'center'}}>
              <Typography className='title'>
                Title
              </Typography>
              <Typography className='author'>Author</Typography>
              <Typography paragraph sx={{textAlign: 'justify', paddingTop: '5px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula nunc vitae.
              </Typography>
              <Button>Link</Button>
            </CardContent>
          </Collapse>
      </Card>
    </StyledEngineProvider>
  );
}

export default Cards;