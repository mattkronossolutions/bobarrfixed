import React, { useContext, useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonNext,
  CarouselContext,
  ButtonBack,
} from 'pure-react-carousel';

import {
  TmdbSearchResult,
  useGetLibraryMoviesQuery,
  useGetLibraryTvShowsQuery,
} from '../../utils/graphql';

import { TMDBCardComponent } from '../tmdb-card/tmdb-card.component';

export function CarouselComponent({
  results,
  type,
}: {
  results: TmdbSearchResult[];
  type: 'movie' | 'tvshow';
}) {
  const theme = useTheme();
  const { data: moviesLibrary } = useGetLibraryMoviesQuery();
  const { data: tvShowsLibrary } = useGetLibraryTvShowsQuery();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCarouselSettings = () => {
    if (!windowWidth) return { visibleSlides: 5, cardWidth: 220 };

    if (windowWidth < 576) {
      return { visibleSlides: 1, cardWidth: Math.min(200, windowWidth - 40) };
    } else if (windowWidth < 992) {
      return { visibleSlides: 2, cardWidth: (windowWidth - 60) / 2.2 };
    }
    return { visibleSlides: 5, cardWidth: 220 };
  };

  const { visibleSlides, cardWidth } = getCarouselSettings();

  const tmdbIds = [
    ...(moviesLibrary?.movies?.map(({ tmdbId }) => tmdbId) || []),
    ...(tvShowsLibrary?.tvShows?.map(({ tmdbId }) => tmdbId) || []),
  ];

  return (
    <div className="carrousel--container">
      <CarouselProvider
        naturalSlideHeight={theme.tmdbCardHeight}
        naturalSlideWidth={cardWidth}
        totalSlides={results.length}
        dragEnabled={false}
        visibleSlides={visibleSlides}
        step={Math.max(1, visibleSlides - 1)}
      >
        <ResetCarouselSlideAndGoBack watch={results} />
        <Slider>
          {results.map((result, index) => (
            <Slide
              key={result.id}
              index={index}
              innerClassName="carrousel--slide"
            >
              <TMDBCardComponent
                key={result.id}
                type={type}
                result={result}
                inLibrary={tmdbIds.includes(result.tmdbId)}
              />
            </Slide>
          ))}
        </Slider>
        {results.length > visibleSlides && (
          <>
            <ButtonNext className="arrow-right">
              <FaChevronCircleRight size={16} />
            </ButtonNext>
            <ButtonBack className="arrow-left">
              <FaChevronCircleLeft size={16} />
            </ButtonBack>
          </>
        )}
      </CarouselProvider>
    </div>
  );
}

function ResetCarouselSlideAndGoBack({ watch }: { watch: any }) {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  useEffect(() => {
    if (carouselContext.state.currentSlide !== 0) {
      carouselContext.setStoreState({ currentSlide: 0 });
    }
  }, [carouselContext, watch]);

  if (currentSlide === 0) {
    return <noscript />;
  }

  return null;
}
