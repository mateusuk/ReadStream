import React, { useState, useRef } from 'react';
import "./SearchBar.css";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { searchBooks } from '../../utils/API';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cards from '../Cards/Cards';

 function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

   const handleSearch = async () => {
    try {
      const data = await searchBooks(searchTerm || selectedOption);
      console.log(data.items);
      setSearchResults(data.items || []);
    } catch (error) {
      console.error(error);
    }
    if (searchResults !== []) { setError(null); }

    if (searchTerm.length === 0) {
      setError('Please enter a search query!');
      setSearchResults([]);
    }
  }
 
  const handleInputChange = (event, value) => {
    setSearchTerm(value);
  };

  const handleChange = (event, value) => {
    setSelectedOption(value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await handleSearch();
      scrollToRef.current.scrollIntoView();
    }
  };

  const scrollToRef = useRef();

  return (
    <div>
      <div className="container">
        <Stack spacing={2} sx={{ width: 800 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={books.map((option) => option.title)}
            onInputChange={handleInputChange}
            onChange={handleChange}
          
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Book"
                variant="outlined"
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={ async () => { await handleSearch(); scrollToRef.current.scrollIntoView(); }} >
                        <SearchIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <div className='input-error'> {error} </div>
        </Stack>
      </div>
     
      <div className="results-container">
        <Box sx={{ maxWidth: '85%', marginLeft: '12%' }}>
          <Grid
            container
            ref={scrollToRef}
            spacing={2}
            direction='row'
            marginBottom='5rem'
            marginTop='2.5rem'
          >
          {searchResults.map((book => {
            if (book.volumeInfo.imageLinks?.thumbnail !== undefined) {
              return (
                <Grid item xs={3}>
                  <Cards 
                    key={book.id} 
                    title={book.volumeInfo.title} 
                    author={book.volumeInfo.authors} 
                    description={book.volumeInfo.description} 
                    link={book.volumeInfo.previewLink}
                    image={book.volumeInfo.imageLinks?.thumbnail}
                  />
                </Grid>
                )
              }
              return null;
            }))
          }
          </Grid>
        </Box>
      </div>
    </div>
  );
}

const books = [
  { title: 'The Shawshank Redemption'},
  { title: 'The Godfather'},
  { title: 'I Feel Bad About My Neck'},
  { title: 'Broken Glass'},
  { title: '12 Angry Men'},
  { title: "Schindler's List"},
  { title: 'Harry Potter'},
  {
    title: 'The Lord of the Rings',

  },
  { title: 'The Good, the Bad and the Ugly'},
  { title: 'A Little Life'},
  {
    title: 'The Tipping Point',

  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',

  },
  { title: 'Forrest Gump'},
  { title: 'Inception'},
  {
    title: 'The Lord of the Rings: The Two Towers',

  },
  { title: "One Flew Over the Cuckoo's Nest"},
  { title: 'The Spirit Level'},
  { title: 'The Matrix'},
  { title: 'Seven Samurai'},
  {
    title: 'Star Wars: Episode IV - A New Hope',

  },
  { title: 'City of God'},
  { title: 'Se7en'},
  { title: 'Darkmans'},
  { title: "It's a Wonderful Life"},
  { title: 'Life Is Beautiful'},
  { title: 'The Usual Suspects'},
  { title: 'Léon: The Professional'},
  { title: 'Spirited Away'},
  { title: 'Saving Private Ryan'},
  { title: 'Once Upon a Time in the West'},
  { title: 'American History X'},
  { title: 'Interstellar'},
  { title: 'Casablanca'},
  { title: 'City Lights'},
  { title: 'Psycho'},
  { title: 'The Green Mile'},
  { title: 'The Intouchables'},
  { title: 'Modern Times'},
  { title: 'Raiders of the Lost Ark'},
  { title: 'Rear Window'},
  { title: 'The Pianist'},
  { title: 'The Departed'},
  { title: 'Terminator 2: Judgment Day'},
  { title: 'Back to the Future'},
  { title: 'Whiplash'},
  { title: 'Gladiator'},
  { title: 'Memento'},
  { title: 'The Prestige'},
  { title: 'The Lion King'},
  { title: 'Apocalypse Now'},
  { title: 'Alien'},
  { title: 'Sunset Boulevard'},
  {
    title: 'The Siege',

  },
  { title: 'The Great Dictator'},
  { title: 'Light'},
  { title: 'The Lives of Others'},
  { title: 'Grave of the Fireflies'},
  { title: 'Paths of Glory'},
  { title: 'Django Unchained'},
  { title: 'The Shining'},
  { title: 'WALL·E'},
  { title: 'American Beauty'},
  { title: 'The Dark Knight Rises'},
  { title: 'Princess Mononoke'},
  { title: 'Visitation'},
  { title: 'Oldboy'},
  { title: 'Once Upon a Time in America'},
  { title: 'Witness for the Prosecution'},
  { title: 'Bad Blood'},
  { title: 'Citizen Kane'},
  { title: 'North by Northwest'},
  { title: 'Vertigo'},
  {
    title: 'Noughts & Crosses',

  },
  { title: 'Reservoir Dogs'},
  { title: 'Braveheart'},
  { title: 'Priestdaddy'},
  { title: 'Requiem for a Dream'},
  { title: 'Stories of Your Life and Others'},
  { title: 'A Clockwork Orange'},
  { title: 'Like Stars on Earth'},
  { title: 'Tell Me How It Ends'},
  { title: 'Lawrence of Arabia'},
  { title: 'Double Indemnity'},
  {
    title: 'Eternal Sunshine of the Spotless Mind',

  },
  { title: 'The God Delusion'},
  { title: 'To Kill a Mockingbird'},
  { title: 'Toy Story 3'},
  { title: 'Logan'},
  { title: 'Full Metal Jacket'},
  { title: 'Dangal'},
  { title: 'Harvest'},
  { title: '2001: A Space Odyssey'},
  { title: "Singin' in the Rain"},
  { title: 'Toy Story'},
  { title: 'Bicycle Thieves'},
  { title: 'The Cost of Living'},
  { title: 'Inglourious Basterds'},
  { title: 'Snatch'},
  { title: '3 Idiots'},
  { title: 'Monty Python and the Holy Grail'},
];

export default SearchBar;