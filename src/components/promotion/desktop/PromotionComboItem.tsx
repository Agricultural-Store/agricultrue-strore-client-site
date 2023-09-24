import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  image?: string;
  title?: string;
  description: string;
  id?: string;
};

const PromotionComboItem = ({ image, title, description, id }: Props) => {
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
          fontSize="24px"
          fontWeight={600}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
        <Box
          dangerouslySetInnerHTML={{ __html: description }}
          // p="16px"
          minHeight="100px"
        ></Box>
      </CardContent>
      <CardActions>
        <Button
          id={id}
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