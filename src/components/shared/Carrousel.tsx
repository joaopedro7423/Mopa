import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Icon, Image, Spinner } from "@chakra-ui/react";
import { productList } from "navigation/productsList";
import { Link } from "./Link";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export function CarouselChakra() {
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  if (!isLoad) {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <>
        <Carousel
          focusOnSelect={true}
          centerMode={true}
          autoPlay={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {productList.map((item, key) => (
            <Link
              key={key}
              justifyContent="center"
              h="100%"
              href={item.urlStripe}
              externalLink
            >
              <Image
                h="80%"
                w="100%"
                alt="Images"
                objectFit="cover"
                src={item.image}
              />
              <Box px={3} color="white" textAlign="center">
                {item.description}
              </Box>
            </Link>
          ))}
        </Carousel>
      </>
    );
  } else {
    return <Spinner margin="auto"></Spinner>;
  }
}
