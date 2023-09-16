import { useMediaQuery } from "@mui/material";

const useMedia = (maxWidth = 600) => {
  const media = useMediaQuery(`(max-width: ${maxWidth}px)`);
  return { media, maxWidth };
};

export default useMedia;
