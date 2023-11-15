const axios = require("axios");
const docs = {
  1: [
    {
      type: "paragraph",
      children: [{ text: "Loaded from database document1" }],
    },
  ],
  2: [
    {
      type: "paragraph",
      children: [{ text: "Loaded from database document 2" }],
    },
  ],
};
const empty = [{ type: "paragraph", children: [{ text: "Empty" }] }];

const document = {
  load: async (documentName) => {
    try {
      const documentId = documentName?.split("-")[1];
      const data = await axios.get("http://localhost:8080/api/v1/docs/16806", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZWNoIEFnZW5jaUZsb3ciLCJmaXJzdE5hbWUiOiJUZWNoIiwibGFzdE5hbWUiOiJBZ2VuY2lGbG93In0.mLQARBo2PiBpKA6RdV8Q9zusO2fLpaid7daeAOV8rFU",
        },
        method: "get",
      });
      return JSON.parse(data?.data?.data?.content);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  save: async (data) => {
    try {
      const params = {
        content: JSON.stringify(data || empty),
      };
      const req = await axios.put(
        "http://localhost:8080/api/v1/docs/16806",
        params,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZWNoIEFnZW5jaUZsb3ciLCJmaXJzdE5hbWUiOiJUZWNoIiwibGFzdE5hbWUiOiJBZ2VuY2lGbG93In0.mLQARBo2PiBpKA6RdV8Q9zusO2fLpaid7daeAOV8rFU",
          },
          method: "put",
        }
      );
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

module.exports = document;
