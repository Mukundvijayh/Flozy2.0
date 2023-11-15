const { Logger } = require("@hocuspocus/extension-logger");
const { Server } = require("@hocuspocus/server");
const {
  slateNodesToInsertDelta,
  yTextToSlateElement,
} = require("@slate-yjs/core");
const Y = require("yjs");
const documentController = require("./controllers/document");

// Setup the server
const server = Server.configure({
  address: "localhost",
  port: 1234,

  // Add logging
  extensions: [new Logger()],

  async onConnect({ connection }) {
    connection.requiresAuthentication = true;
  },

  async onAuthenticate(data) {
    const { token } = data;
    return token;
  },

  async onLoadDocument(data) {
    // Load the initial value in case the document is empty
    if (data.document.isEmpty("content")) {
      const document = await documentController.load(data.documentName);
      const insertDelta = slateNodesToInsertDelta(document);
      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    }

    return data.document;
  },

  async onStoreDocument(data) {
    await documentController.save(
      yTextToSlateElement(data.document.get("content"))?.children
    );
  },
});

// Start the server
server.enableMessageLogging();
server.listen();
