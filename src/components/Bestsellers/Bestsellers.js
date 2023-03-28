import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './Bestsellers.css';
import { Button } from '@mui/material';
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";
import image5 from "../../assets/img5.jpg";
import image6 from "../../assets/img6.jpg";
import image7 from "../../assets/img7.jpg";
import image8 from "../../assets/img8.jpg";
import image9 from "../../assets/img9.jpg";
import image10 from "../../assets/img10.jpg";
import { keyframes } from 'styled-components';

const slides = [
    {
        image: image1,
        article: 'https://www.nytimes.com/2020/12/30/books/great-gatsby-fitzgerald-copyright.html'
    },
    {
        image: image2,
        article: 'https://www.nytimes.com/2021/10/21/books/james-joyce-ulysses.html?searchResultPosition=6'
    },
    {
        image: image3,
        article: 'https://www.nytimes.com/2017/05/15/t-magazine/william-friedkin-marcel-proust.html?searchResultPosition=1'
    },
    {
        image: image4,
        article: 'https://www.nytimes.com/2023/03/11/books/review/hello-beautiful-ann-napolitano.html?searchResultPosition=1'
    },
    {
        image: image5,
        article: 'https://www.nytimes.com/2016/10/09/books/review/in-exile-with-don-quixote.html?searchResultPosition=5'
    },
    {
        image: image6,
        article: 'https://www.nytimes.com/2015/06/26/arts/design/looking-at-the-birth-of-lewis-carrolls-alice-150-years-old.html?searchResultPosition=3'
    },
    {
        image: image7,
        article: 'https://www.nytimes.com/2021/02/24/sports/baseball/thinking-fast-and-slow-book.html?searchResultPosition=42'
    },
    {
        image: image8,
        article: 'https://www.nytimes.com/2022/07/13/movies/where-the-crawdads-sing-review.html?searchResultPosition=7'
    },
    {
        image: image9,
        article: 'https://www.nytimes.com/2007/02/11/books/review/Biersdorfer.t.html?searchResultPosition=151'
    },
    {
        image: image10,
        article: 'https://www.nytimes.com/2020/07/31/books/review-caste-isabel-wilkerson-origins-of-our-discontents.html?searchResultPosition=1'
    },
];

const innerWidth = window.innerWidth;

const Bestsellers = () => {
    const [width, setWidth] = useState(5410 - innerWidth);
    const carousel = useRef();

    useEffect(() => {

    const resizeHandler = () => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };

    const observer = new MutationObserver(() => {
        if (carousel.current.offsetWidth > 0) {
        resizeHandler();
        observer.disconnect();
        }
    });

    observer.observe(carousel.current, { childList: true });
    window.addEventListener('resize', resizeHandler);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <>
            <p className='bestsellersText'>
            Welcome to our website! We understand that reading can be a daunting task, requiring effort and time. Choosing a book from the vast market can be overwhelming, and the fear of investing time in an underwhelming read can be discouraging. This is precisely why we have created this page! We aim to guide you towards the <a className='timesLink' rel="noreferrer" target={'_blank'} href='https://www.nytimes.com/books/best-sellers/'>bestsellers section of The New York Times</a>, where you can find books that have already proven their worth. By selecting any of these books, you can be confident that you will not be disappointed. In addition to our Bestsellers page, our team has also put together a list of personal recommendations. We have handpicked these books based on our own experiences, and we hope you'll find them as enjoyable as we did. Happy reading!
            </p>
            <motion.div 
                ref={carousel} 
                className='carousel' 
                whileTap={{cursor: 'grabbing'}}
                
            >
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className='inner-carousel'
                    animate={{
                        x: -(5390 - innerWidth)}} 
                        transition={{ duration: 35}}
                >
                    {slides.map((slide) => {
                        return (
                            <motion.div whileHover={{
                                scale: 1.1, 
                                transition: {duration: 0.4}}}  
                                className='item' 
                                key={slide} 
                            >
                                <Button 
                                    className='carouselButton' 
                                    href={slide.article} 
                                    target={'_blank'} 
                                    sx={{color: "whitesmoke"}}
                                >
                                        <img src={slide.image} alt='' />
                                </Button>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </>
    )
};

export default Bestsellers;