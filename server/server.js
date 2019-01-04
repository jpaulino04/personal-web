const express  = require('express'),
        app    = express();


const port = process.env.PORT || 3006;





app.listen(port, () => {
    console.log(`Server Running! on port ${port}`)
})