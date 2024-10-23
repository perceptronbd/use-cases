const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.0',  
    info: {
      title: 'Swagger Express API',        
      version: '1.0.0',               
      description: 'API Documentation',
      contact: {
        name: 'username',
        email: 'username@mail.com', 
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1', 
      },{
        url: 'http://localhost:3000/api/v2', 
      },
    ],
  },
  apis: ['./routes/*.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports =  swaggerDocs 
