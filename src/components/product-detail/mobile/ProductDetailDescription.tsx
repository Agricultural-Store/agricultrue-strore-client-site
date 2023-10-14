import { Box, Typography } from "@mui/material";
import React from "react";

const ProductDetailDescription = () => {
  return (
    <Box sx={{ textAlign: "justify" }}>
      <Typography
        fontSize="20px"
        fontWeight={700}
        sx={{ mb: "16px", fontSize: "18px" }}
      >
        Giới thiệu về gạo ST25
      </Typography>
      <Typography sx={{ mb: "16px", lineHeight: "28px", fontSize: "14px" }}>
        Hạt gạo ST25 là một loại gạo thơm ngon đến từ Việt Nam, và nó đã được công nhận là
        một trong những loại gạo ngon nhất thế giớ Loại gạo này không chỉ nổi tiếng vì
        hương vị và chất lượng của mình, mà còn vì sự độc đáo trong cách canh tác và xử
        lý. Nó thể hiện sự đầu tư và tâm huyết của các nông dân và nhà khoa học Việt Nam
        trong việc phát triển nền nông nghiệp bền vững và chất lượng cao.
      </Typography>
      <Typography
        fontSize="20px"
        fontWeight={700}
        sx={{ mb: "16px", fontSize: "18px" }}
      >
        Quy trình canh tác của gạo ST25
      </Typography>
      <Typography sx={{ mb: "16px", lineHeight: "28px", fontSize: "14px" }}>
        Gạo ST25 được trồng và chăm sóc dưới sự giám sát chặt chẽ, theo quy trình hữu cơ,
        tận dụng tối đa nguồn nước tinh khiết và đất màu mỡ của Đồng bằng sông Cửu Long.
        Mỗi bước trong quá trình chế biến, từ lựa chọn hạt giống đến việc sấy khô và đóng
        gói, đều được thực hiện với sự tỉ mỉ và chuyên nghiệp.
      </Typography>
      <Typography sx={{ mb: "16px", lineHeight: "28px", fontSize: "14px" }}>
        Gạo ST25 không chỉ nổi tiếng trong nước mà còn được biết đến trên toàn thế giới.
        Sự kết hợp hoàn hảo giữa hương vị tinh tế và giá trị dinh dưỡng cao đã giúp ST25
        giành được nhiều giải thưởng quốc tế uy tín, khẳng định vị thế và chất lượng đỉnh
        cao của sản phẩm nông nghiệp Việt Nam.
      </Typography>
      <Typography
        fontSize="20px"
        fontWeight={700}
        sx={{ mb: "16px", fontSize: "18px" }}
      >
        Sứ mệnh và tầm nhìn ST25
      </Typography>
      <Typography sx={{ mb: "16px", lineHeight: "28px", fontSize: "14px" }}>
        Gạo ST25 không chỉ là một sản phẩm, mà còn là biểu tượng của niềm tự hào, truyền
        thống và sự sáng tạo. Mục tiêu của những người sản xuất ST25 không chỉ dừng lại ở
        việc tạo ra một sản phẩm chất lượng, mà còn là giữ vững niềm tin và sự yêu mến của
        người tiêu dùng dành cho gạo Việt, trên bất kỳ bản đồ ẩm thực nào trên thế giới.
      </Typography>
      <Typography sx={{ mb: "16px", lineHeight: "28px", fontSize: "14px" }}>
        Mỗi hạt gạo ST25 không chỉ chứa đựng hương vị đặc trưng, mà còn là kết quả của quá
        trình lao động và tâm huyết, biểu tượng cho sự kết nối giữa con người và thiên
        nhiên, giữa truyền thống và hiện đại.
      </Typography>
    </Box>
  );
};

export default ProductDetailDescription;
