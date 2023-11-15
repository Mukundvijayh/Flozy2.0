import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import withLinks from "../plugins/withLinks";
import withTables from "../plugins/withTable";
import withEmbeds from "../plugins/withEmbeds";
import withEquation from "../plugins/withEquation";
import withMentions from "../plugins/withMentions";

const withCommon = (props) => {
  return withEquation(
    withHistory(
      withEmbeds(withTables(withLinks(withMentions(withReact(props)))))
    )
  );
};

export default withCommon;
