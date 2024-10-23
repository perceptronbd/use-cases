const express = require("express");
const swaggerUiExpress = require("swagger-ui-express");
const userRoutes = require("./routes/user");
const  swaggerDocs  = require("./swaggerConfig");


const app = express();

app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));

app.use("/api/v1",userRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to Swagger Express API!");
    }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));