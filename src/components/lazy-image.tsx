import * as React from "react";
import ProgressiveImage from "react-progressive-image";
import { BlurhashCanvas } from "react-blurhash";
import { Image } from "@chakra-ui/react";
import placeholder from 'assets/images/placeholder.png';

type LazyImageProps = {
  id: number;
  src: string;
  handleClick: (id: number) => void;
  blurHash: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, handleClick, blurHash, id } = props;

  return (
    <ProgressiveImage
      delay={500}
      src={src}
    //   placeholder="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
      placeholder={placeholder}
    >
      {(src, loading) => {
        return loading ? (
          <BlurhashCanvas
            hash={blurHash}
            width={400}
            height={300}
            punch={1}
          />
        ) : (
          <Image
            src={src}
            height={300}
            width={"100%"}
            cursor={"pointer"}
            objectFit="cover"
            alt="cover image"
            // fallbackSrc="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
            fallbackSrc={placeholder}
            onClick={() => handleClick(id)}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default LazyImage;
