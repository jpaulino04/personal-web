const express  = require('express'),
        app    = express();


const port = process.env.PORT || 3005;





app.listen(port, () => {
    console.log(`Server Running! on port ${port}`)
})