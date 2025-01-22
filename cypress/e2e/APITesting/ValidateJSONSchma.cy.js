
const Ajv = require('ajv')
const ajv = new Ajv()

describe('Validate JSON Schema',()=>{

    it('Validate JSON Schema',()=>{

        cy.request({

            method:'GET',
            url:'https://fakestoreapi.com/products',            
        })
        .then((response)=>{

            const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "properties": {
                  "id": {
                    "type": "number"
                  },
                  "title": {
                    "type": "string"
                  },
                  "price": {
                    "type": "number"
                  },
                  "description": {
                    "type": "string"
                  },
                  "category": {
                    "type": "string"
                  },
                  "image": {
                    "type": "string"
                  },
                  "rating": {
                    "type": "object",
                    "properties": {
                      "rate": {
                        "type": "number"
                      },
                      "count": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "rate",
                      "count"
                    ]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "price",
                  "description",
                  "category",
                  "image",
                  "rating"
                ]
              }

              const validate = ajv.compile(schema)
              const isValid = validate(response.body)
              cy.log(isValid)
              expect(isValid).to.be.true;

            
        })


    })

})

// ajv 
//https://www.npmjs.com/package/ajv

