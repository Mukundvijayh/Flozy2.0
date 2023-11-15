import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
const YJS_SOCKET_URL = "ws://localhost:8080";

function YjsProvider(roomName) {
  const doc = new Y.Doc();
  const provider = new WebsocketProvider(YJS_SOCKET_URL, roomName, doc);
  return provider;
}

export default YjsProvider;
