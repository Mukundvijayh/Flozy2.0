import { createEditor } from "slate";
import { withYjs, withCursors } from "@slate-yjs/core";

const withCollaborative = (props) => {
  const { provider, sharedType, data } = props;
  return withCursors(
    withYjs(createEditor(), sharedType, { autoConnect: false }),
    provider.awareness,
    {
      data,
    }
  );
};

export default withCollaborative;
