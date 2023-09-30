import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PromotionComboItem from "./PromotionComboItem";

const PromotionComboList = () => {
  const [combos] = useState([
    {
      comboImage: "/images/promotion-combo-1.png",
      comboName: 'Combo "Tiết Kiệm Gia Đình"',
      comboDescription: `<ul style="padding-left: 24px;">
                            <li style="font-size: 16px">Mua 10kg gạo Đồng bằng Sông Cửu Long, tặng ngay 1kg gạo cùng loại.</li>
                            <li style="font-size: 16px">Kèm theo 1 chai dầu ăn cao cấp 500ml.</li>
                        </ul>
                        <p style="font-style: italic; font-size: 14px; padding-top: 14px;">Lợi ích: Dành cho gia đình không quá nhiều người, tiết kiệm và tiện dụng.</p>`,
      id: "1",
    },
    {
      comboImage: "/images/promotion-combo-2.png",
      comboName: 'Combo "Thực Đơn Sức Khỏe"',
      comboDescription: `<ul style="padding-left: 24px;">
      <li style="font-size: 16px">Mua 10kg gạo Đồng bằng Sông Cửu Long, tặng ngay 1kg gạo cùng loại.</li>
      <li style="font-size: 16px">Kèm theo 1 chai dầu ăn cao cấp 500ml.</li>
  </ul>
  <p style="font-style: italic; font-size: 14px; padding-top: 14px;">Lợi ích: Dành cho gia đình không quá nhiều người, tiết kiệm và tiện dụng.</p>`,
      id: "2",
    },
    {
      comboImage: "/images/promotion-combo-3.png",
      comboName: 'Combo "Tân Sinh Viên"',
      comboDescription: `<ul style="padding-left: 24px;">
      <li style="font-size: 16px">Mua 10kg gạo Đồng bằng Sông Cửu Long, tặng ngay 1kg gạo cùng loại.</li>
      <li style="font-size: 16px">Kèm theo 1 chai dầu ăn cao cấp 500ml.</li>
  </ul>
  <p style="font-style: italic; font-size: 14px; padding-top: 14px;">Lợi ích: Dành cho gia đình không quá nhiều người, tiết kiệm và tiện dụng.</p>`,
      id: "3",
    },
    {
      comboImage: "/images/promotion-combo-4.png",
      comboName: 'Combo "Nếp Quê Hương"',
      comboDescription: `<ul style="padding-left: 24px;">
                            <li style="font-size: 16px">Mua 10kg gạo Đồng bằng Sông Cửu Long, tặng ngay 1kg gạo cùng loại.</li>
                            <li style="font-size: 16px">Kèm theo 1 chai dầu ăn cao cấp 500ml.</li>
                        </ul>
                        <p style="font-style: italic; font-size: 14px; padding-top: 14px;">Lợi ích: Dành cho gia đình không quá nhiều người, tiết kiệm và tiện dụng.</p>`,
      id: "4",
    },
    {
      comboImage: "/images/promotion-combo-5.png",
      comboName: 'Combo "Nấu Cơm Mỗi Ngày"',
      comboDescription: `<ul style="padding-left: 24px;">
                            <li style="font-size: 16px">Mua 10kg gạo Đồng bằng Sông Cửu Long, tặng ngay 1kg gạo cùng loại.</li>
                            <li style="font-size: 16px">Kèm theo 1 chai dầu ăn cao cấp 500ml.</li>
                        </ul>
                        <p style="font-style: italic; font-size: 14px; padding-top: 14px;">Lợi ích: Dành cho gia đình không quá nhiều người, tiết kiệm và tiện dụng.</p>`,
      id: "5",
    },
    {
      comboImage: "/images/promotion-combo-6.png",
      comboName: 'Combo "Sáng Tạo Trong Bếp"',
      comboDescription: `<ul style="padding-left: 24px;">
                            <li style="font-size: 16px">Mua 10kg gạo Đồng bằng Sông Cửu Long, tặng ngay 1kg gạo cùng loại.</li>
                            <li style="font-size: 16px">Kèm theo 1 chai dầu ăn cao cấp 500ml.</li>
                        </ul>
                        <p style="font-style: italic; font-size: 14px; padding-top: 14px;">Lợi ích: Dành cho gia đình không quá nhiều người, tiết kiệm và tiện dụng.</p>`,
      id: "6",
    },
  ]);

  return (
    <Box sx={{ p: "64px 48px" }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "28px", mb: "48px", fontWeight: 600 }}
      >
        Combo Khuyến Mãi
      </Typography>
      <Grid
        container
        spacing={4}
        rowSpacing={6}
        flexWrap="wrap"
      >
        {combos.map((combo) => (
          <Grid
            item
            key={combo.id}
            xs={4}
          >
            <PromotionComboItem
              image={combo.comboImage}
              title={combo.comboName}
              description={combo.comboDescription}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PromotionComboList;
