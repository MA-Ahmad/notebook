import * as React from "react";
import {
  ModalContent,
  Modal,
  ModalBody,
  ModalOverlay,
  IconButton
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import coverImages from "data/cover_images";
import { motion, AnimatePresence } from "framer-motion";
import "assets/stylesheets/carousel.css";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export interface CarouselProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  repoId: number;
}

const Carousel: React.SFC<CarouselProps> = ({
  onOpen,
  onClose,
  isOpen,
  repoId
}) => {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  React.useEffect(() => {
    setImageIndex(repoId);
  }, [repoId]);

  const nextImage = (newDirection: number) => {
    paginate(newDirection);
    setImageIndex(imageIndex + 1 < coverImages.length ? imageIndex + 1 : 0);
  };

  const prevImage = (newDirection: number) => {
    paginate(newDirection);
    setImageIndex(
      0 === imageIndex ? coverImages.length - 1 : imageIndex - 1
    );
  };

  return (
    <Modal isCentered onClose={onClose} size={"6xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding="0">
          <div className="carousel-container">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={coverImages[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <div className="next" onClick={() => nextImage(1)}>
              <IconButton
                aria-label="left image"
                icon={<ChevronLeftIcon />}
                cursor="pointer"
                as={ChevronRightIcon}
                size="md"
                colorScheme="teal"
                borderRadius="full"
              />
            </div>

            <div className="prev" onClick={() => prevImage(-1)}>
              <IconButton
                aria-label="right image"
                icon={<ChevronRightIcon />}
                cursor="pointer"
                as={ChevronLeftIcon}
                size="md"
                colorScheme="teal"
                borderRadius="full"
              />
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Carousel;
