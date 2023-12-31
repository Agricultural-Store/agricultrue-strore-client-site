import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next-intl/client";
import React from "react";

type Props = {
  image?: string;
  title?: string;
  description?: string;
  id?: number;
};

const PromotionComboItem = ({ image, title, description, id }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/promotion/${id}`);
  };

  return (
    <Card
      sx={{
        bgcolor: "color.bgPrimaryWithOpacity",
        borderRadius: 0,

        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        src={image}
        width="100%"
      />
      <CardContent>
        <Typography
          fontSize="18px"
          fontWeight={600}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          mb="16px"
        >
          {title}
        </Typography>
        <Box
          dangerouslySetInnerHTML={{ __html: description || "" }}
          minHeight="100px"
          maxHeight="100px"
          overflow="hidden"
          fontSize="14px"
          sx={{
            "*": {
              fontSize: "14px !important",
              fontWeight: 400,
            },
          }}
        ></Box>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleClick}
          variant="contained"
          fullWidth
        >
          Mua ngay
        </Button>
      </CardActions>
    </Card>
  );
};

export default PromotionComboItem;
