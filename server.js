const express = require('express');
const app = express();

app.use(express.static('public')); // 这里 'public' 是包含 JSON 文件的目录

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
