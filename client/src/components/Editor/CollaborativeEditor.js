import React, { useEffect, useMemo, useState } from "react";
import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";
import { Editor, Transforms } from "slate";
import { YjsEditor } from "@slate-yjs/core";
import "./Editor.css";
import { draftToSlate } from "./utils/draftToSlate";
import withCommon from "./hooks/withCommon";
import withCollaborative from "./hooks/withCollaborative";
import CommonEditor from "./CommonEditor";

const CollaborativeEditor = (props) => {
  const { id, content, onSave, user } = props;
  const convertedContent = draftToSlate({ data: content });
  const [value] = useState(convertedContent);
  const [connected, setConnected] = useState(null);
  const [authenticated, setAuthenticated] = useState({
    status: null,
    scope: null,
  });

  const provider = useMemo(() => {
    return new HocuspocusProvider({
      url: "ws://localhost:1234",
      name: `document-${id}`,
      connect: false,
      token: user?.name,
    });
  }, []);

  // setup changes for Yjs
  const editor = useMemo(() => {
    if (!connected) return null;
    const sharedType = provider.document.get("content", Y.XmlText);
    const e = withCommon(
      withCollaborative({
        provider,
        sharedType,
        data: user,
      })
    );

    // Ensure editor always has at least 1 valid child
    const { normalizeNode } = e;
    e.normalizeNode = (entry) => {
      const [node] = entry;

      if (!Editor.isEditor(node) || node.children.length > 0) {
        return normalizeNode(entry);
      }

      Transforms.insertNodes(editor, value, { at: [0] });
    };

    return e;
  }, [provider.document, provider.awareness, connected]);

  // connect Yjs
  useEffect(() => {
    provider.connect();
    return () => {
      provider.disconnect(editor);
    };
  }, [provider]);

  // connect to editor
  useEffect(() => {
    if (editor) {
      YjsEditor.connect(editor);
    }
    return () => {
      if (editor) {
        YjsEditor.disconnect(editor);
      }
    };
  }, [editor]);

  provider.on("authenticated", () => {
    setAuthenticated({
      status: true,
      scope: provider.authorizedScope,
    });
  });

  provider.on("authenticationFailed", () => {
    setAuthenticated({
      status: false,
      scope: null,
    });
  });

  provider.on("synced", () => {
    setConnected(true);
  });

  provider.on("disconnect", () => {
    setConnected(false);
  });

  provider.on("close", () => {
    setConnected(false);
  });

  if (authenticated.status === null || !connected === null || !editor) {
    return <h1 data-status={connected}>Loading...</h1>;
  }

  return (
    <CommonEditor
      editor={editor}
      id={id}
      content={[]}
      onSave={onSave}
      readOnly={authenticated.scope}
    />
  );
};

export default CollaborativeEditor;
