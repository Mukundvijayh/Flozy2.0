const getStyle = (text, inlineStyle, data) => {
  if (inlineStyle?.style) {
    switch (inlineStyle?.style) {
      case "BOLD":
        return { text, bold: true };
      case "ITALIC":
        return { text, italic: true };
      default:
        return { text };
    }
  } else if (inlineStyle?.key !== undefined) {
    const entityData = data?.entityMap[inlineStyle?.key];
    switch (entityData?.type) {
      case "mention":
        return {
          character: text,
          type: entityData?.type,
          data: entityData?.data,
          children: [{ text: "" }],
        };
      default:
        return { text };
    }
  } else {
    return { text };
  }
};

const splitInlineStyleRanges = (text, inlineStyleRanges, data) => {
  if (inlineStyleRanges.length > 0) {
    let currentOffset = 0;
    let allRanges = [];
    for (let i = 0; i < inlineStyleRanges.length; i++) {
      const { offset, length } = inlineStyleRanges[i];
      if (currentOffset < offset) {
        allRanges.push({
          offset: currentOffset,
          length: offset - currentOffset,
        });
        allRanges.push({
          offset,
          length,
        });
        currentOffset = offset + length;
      }
    }
    // last line push
    if (currentOffset < text.length) {
      allRanges.push({
        offset: currentOffset,
        length: text.length - currentOffset,
      });
    }
    const splits = allRanges.reduce((a, b) => {
      a.push({
        ...getStyle(
          text.substr(b.offset, b.length),
          inlineStyleRanges.find(
            (f) => f.offset === b.offset && f.length === b.length
          ),
          data
        ),
      });
      return a;
    }, []);
    return splits;
  } else {
    return [text];
  }
};

export const draftToSlate = (props) => {
  const { data } = props;
  if (data?.blocks && data?.blocks?.length > 0) {
    const converted = data?.blocks?.reduce((a, b) => {
      if (b?.text !== undefined) {
        const blocks = splitInlineStyleRanges(
          b?.text,
          [...b?.inlineStyleRanges, ...b?.entityRanges],
          data
        ).map((m) => {
          return {
            ...m,
          };
        });
        a.push({
          type: "paragraph",
          children: blocks,
        });
      }
      return a;
    }, []);
    return converted;
  } else if (data?.length) {
    return data;
  } else {
    return [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ];
  }
};
