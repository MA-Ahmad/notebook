import * as React from "react";
import {
  ModalContent,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  Image,
  IconButton
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import coverImages from "../data/cover_images";

export interface CarouselProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  imageUrl?: string;
}

const Carousel: React.SFC<CarouselProps> = ({
  imageUrl,
  onOpen,
  onClose,
  isOpen
}) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  React.useEffect(() => {
    console.log(imageUrl);
    const index = coverImages.findIndex(
      (cImage: string) => cImage === imageUrl
    );
    setImageIndex(index);
  }, [imageUrl]);

  const nextImage = () => {
    setImageIndex(imageIndex + 1 < coverImages.length ? imageIndex + 1 : 0);
  };

  const prevImage = () => {
    setImageIndex(0 === imageIndex ? coverImages.length - 1 : imageIndex - 1);
    console.log(imageIndex);
  };

  return (
    <Modal isCentered onClose={onClose} size={"6xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody padding="0">
          <Image
            width={"100%"}
            height={"100%"}
            src={coverImages[imageIndex]}
            borderRadius="5px"
            alt="cover image"
            fallbackSrc="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
          />
          <IconButton
            aria-label="left image"
            icon={<ChevronLeftIcon />}
            cursor="pointer"
            as={ChevronLeftIcon}
            size="sm"
            colorScheme="teal"
            position="absolute"
            top="50%"
            left="5px"
            onClick={() => prevImage()}
          />
          <IconButton
            aria-label="right image"
            icon={<ChevronRightIcon />}
            cursor="pointer"
            as={ChevronRightIcon}
            size="sm"
            colorScheme="teal"
            position="absolute"
            top="50%"
            right="5px"
            onClick={() => nextImage()}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Carousel;
