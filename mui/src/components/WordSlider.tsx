import { FC } from 'react';
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
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    KhtmlUserSelect: 'none',
    msTouchAction: 'pan-y',
    touchAction: 'pan-y',
    WebkitTapHighlightColor: 'transparent',
  },
  '.slick-list': {
    transform: 'translate3d(0, 0, 0)',
  },
  '.slick-track': {
    position: 'relative',
    top: 0,
    left: 0,
    display: 'block',
    margin: '0 auto',
    transform: 'translate3d(0, 0, 0)',
  },
  '.slick-slide': {
    visibility: 'hidden',
    '&.slick-active': {
      visibility: 'visible',
    },
  },
}));

const NextArrow: FC<any> = (props) => {
  const { onClick } = props;
  return (
    <ArrowButton
      onClick={onClick}
      sx={{
        right: { xs: 0, sm: 0 },
      }}
    >
      <ArrowForwardIosIcon />
    </ArrowButton>
  );
};

const PrevArrow: FC<any> = (props) => {
  const { onClick } = props;
  return (
    <ArrowButton
      onClick={onClick}
      sx={{
        left: { xs: 0, sm: 0 },
      }}
    >
      <ArrowBackIosNewIcon />
    </ArrowButton>
  );
};

export const WordSlider: FC<WordSliderProps> = ({ words }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: 'ease-out',
    useCSS: true,
    useTransform: true,
    waitForAnimate: true,
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