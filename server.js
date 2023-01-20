const app = require('./src/app')

const PORT = process.env.PORT || 8080;
const MODE = process.env.NODE_ENV;
app.listen(PORT,()=>console.log(`server is running on port ${PORT} in ${MODE} mode`))