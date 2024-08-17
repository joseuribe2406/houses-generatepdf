const propertySchema = {
  type: "object",
  properties: {
    numberProperty:{ type: "string" },
    done:{ type: "string" },
    base:{type:"number"},
    ohiki:{type:"number"},
    superstructure:{type:"number"},
    count:{type:"number"},
    total:{type:"number"}
  },
  required: ["numberProperty", "count", "total"],
  additionalProperties: false
};

// Define the main schema
const tableProperty = {
  type: "object",
  properties: {
    date:{type:"string"},
    numeric_unit:{type:"string"},
    manager:{type:"string"},
    reportPl:{type:"number"},
    total:{type:"number"},
    property: {
      type: "array",
      items: propertySchema
    }
  },
  required: ["total","reportPl","date","numeric_unit","manager","property"],
  additionalProperties: false
};


module.exports = tableProperty;