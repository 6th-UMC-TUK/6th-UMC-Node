const SwaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UMC Mission9 Hee',
            version: '1.0.0',
            description: 'API 3개 만들기 및 Swagger 연동하기'
        },
        components: {
            schemas: {}, // 빈 스키마 객체를 추가해서 undefined 오류를 방지
        },
        host: 'localhost:3000',
        basepath: '../'
    },
    apis: ['./routes/*.js', './swagger/*.js']
};

const specs = SwaggerJsdoc(options);
module.exports = { specs };
