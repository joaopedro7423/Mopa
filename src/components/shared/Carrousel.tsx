import "react-image-gallery/styles/css/image-gallery.css";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, {
  arrowsPlugin,
  autoplayPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import { Box, Icon, Image, Spinner } from "@chakra-ui/react";
import { productList } from "navigation/productsList";
import { Link } from "../shared/Link";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export function CarouselChakra() {
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  if (!isLoad) {
    return (
      <>
        <Carousel
          plugins={[
            "centered",
            "infinite",
            "fastSwipe",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button>
                    <ArrowLeftIcon
                      _hover={{ color: "red" }}
                      w={8}
                      h={8}
                      color="white"
                    />
                  </button>
                ),
                arrowLeftDisabled: (
                  <button>
                    <ArrowLeftIcon
                      _hover={{ color: "red" }}
                      w={8}
                      h={8}
                      color="white"
                    />
                  </button>
                ),
                arrowRight: (
                  <button>
                    <ArrowRightIcon
                      _hover={{ color: "red" }}
                      w={8}
                      h={8}
                      color="white"
                    />
                  </button>
                ),
                arrowRightDisabled: (
                  <button>
                    <ArrowRightIcon
                      _hover={{ color: "red" }}
                      w={8}
                      h={8}
                      color="white"
                    />
                  </button>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}
        >
          {productList.map((item) => (
            <Link
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
