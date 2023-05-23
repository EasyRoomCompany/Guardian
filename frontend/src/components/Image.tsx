import React from "react";

interface ImageProps {
  /**
   * The source URL of the image
   */
  src: string;
  /**
   * The alternative text for the image
   */
  alt: string;
  /**
   * The width of the image (use Tailwind width classes)
   */
  width?: string;
  /**
   * The height of the image (use Tailwind height classes)
   */
  height?: string;
  /**
   * Checks if rounded edges are enabled
   */
  isRoundedBorder?: boolean;
  /**
   * Classname tailwind
   */
  className?: string;
}

/**
 * UI component for displaying images
 */
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = "full",
  height = "full",
  className,
  isRoundedBorder = false,
  ...props
}) => {
  const classNames = `${width} ${height} ${
    isRoundedBorder ? "object-cover rounded" : ""
  }`;

  return <img src={src} alt={alt} className={classNames} {...props} />;
};
