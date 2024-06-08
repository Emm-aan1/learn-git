const express = require('express')
const PORT = 3000

const app = express()

app.get('/',)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})