import React from "react";
import { useAuth } from "../hooks/useAuth";
import { CollaborativeEditor } from "../components/Editor";
import LayoutOne from "../stories/EditorSampleProps/LayoutOne";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Home Page!!</h1>
      <CollaborativeEditor
        id={2}
        user={{ id: 1, name: user?.name || `user_${new Date().getTime()}` }}
        content={[]}
        onSave={(val) => {
          console.log(val);
        }}
      />
    </div>
  );
};

export default Home;
