import { FC, useState } from 'react';
import Slider from 'react-slick';
import { Box, IconButton, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { WordPair } from '../types/word.types';
import WordCard from './WordCard';

// Import slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface WordSliderProps {
  words: WordPair[];
}

const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& svg': {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 60px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 30px',
  },
  '.slick-slider': {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
  },
  '.slick-list': {
    overflow: 'hidden',
    margin: '0',
    padding: '0',
  },
  '.slick-track': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.slick-slide': {
    opacity: 0,
    transition: 'all 0.5s ease-in-out',
    '&.slick-active': {
      opacity: 1,
    },
  },
  // Custom animation classes
  '.slide-right-enter': {
    transform: 'translateX(-100%)',
    opacity: 0,
  },
  '.slide-right-enter-active': {
    transform: 'translateX(0)',
    opacity: 1,
    transition: 'all 500ms ease-in-out',
  },
  '.slide-right-exit': {
    transform: 'translateX(0)',
    opacity: 1,
  },
  '.slide-right-exit-active': {
    transform: 'translateX(100%)',
    opacity: 0,
    transition: 'all 500ms ease-in-out',
  },
  '.slide-left-enter': {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  '.slide-left-enter-active': {
    transform: 'translateX(0)',
    opacity: 1,
    transition: 'all 500ms ease-in-out',
  },
  '.slide-left-exit': {
    transform: 'translateX(0)',
    opacity: 1,
  },
  '.slide-left-exit-active': {
    transform: 'translateX(-100%)',
    opacity: 0,
    transition: 'all 500ms ease-in-out',
  },
}));

const NextArrow: FC<any> = (props) => {
  const { onClick, onDirectionChange } = props;
  const handleClick = (e: React.MouseEvent) => {
    onDirectionChange('right');
    onClick?.(e);
  };
  return (
    <ArrowButton
      onClick={handleClick}
      sx={{
        right: { xs: 0, sm: 0 },
      }}
    >
      <ArrowForwardIosIcon />
    </ArrowButton>
  );
};

const PrevArrow: FC<any> = (props) => {
  const { onClick, onDirectionChange } = props;
  const handleClick = (e: React.MouseEvent) => {
    onDirectionChange('left');
    onClick?.(e);
  };
  return (
    <ArrowButton
      onClick={handleClick}
      sx={{
        left: { xs: 0, sm: 0 },
      }}
    >
      <ArrowBackIosNewIcon />
    </ArrowButton>
  );
};

export const WordSlider: FC<WordSliderProps> = ({ words }) => {
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow onDirectionChange={setSlideDirection} />,
    prevArrow: <PrevArrow onDirectionChange={setSlideDirection} />,
    beforeChange: (_: number, next: number) => {
      const direction = next > _ ? 'right' : 'left';
      setSlideDirection(direction);
    },
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    className: `slide-${slideDirection}`,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {words.map((word) => (
          <div key={word.id}>
            <WordCard
              sourceWord={word.sourceWord}
              targetWord={word.targetWord}
            />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default WordSlider; 