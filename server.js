const express = require('express')
const app = express();
const cTable = require('console.table');

// promptUser();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on http:localhost/${PORT}`));

