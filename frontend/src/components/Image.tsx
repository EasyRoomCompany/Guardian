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
}

/**
 * UI component for displaying images
 */
export const Image = ({
  src,
  alt,
  width = "w-full",
  height = "h-full",
  ...props
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${width} ${height} object-cover rounded`}
      {...props}
    />
  );
};
