import { Box, Typography } from "@mui/material";
import React from "react";
import PromotionDetailRatingList from "./PromotionDetailRatingList";
import useMedia from "@/hooks/shared/useMedia";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import useComboRatingList from "@/hooks/product-combo/useComboRatingList";
import PromotionDetailRatingForm from "./PromotionDetailRatingForm";

const PromotionRating = () => {
  const { media } = useMedia();
  const params = useParams();

  const { status } = useSession();

  const { data, isLoading, isValidating } = useComboRatingList(+(params.id as string));

  return (
    <Box>
      <Typography sx={{ fontWeight: 500, fontSize: media ? "18px" : "20px", mb: "20px" }}>
        Đánh giá từ người dùng
      </Typography>
      <PromotionDetailRatingList
        ratingList={data?.data}
        isLoading={isLoading || isValidating}
      />
      {status === "authenticated" ? (
        <>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: media ? "18px" : "20px",
              mb: "20px",
              mt: "50px",
            }}
          >
            Đánh giá sản phẩm
          </Typography>
          <PromotionDetailRatingForm />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default PromotionRating;
