const ChatSample = {
  blocks: [
    {
      key: "c4hg",
      text: "line one contains bold text\nline two contains normal one\nline three contains both bold and @Tech AgenciFlow ",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        { offset: 18, length: 10, style: "BOLD" },
        { offset: 82, length: 5, style: "BOLD" },
      ],
      entityRanges: [{ offset: 91, length: 16, key: 0 }],
      data: {},
    },
  ],
  entityMap: {
    0: {
      type: "mention",
      mutability: "SEGMENTED",
      data: {
        mention: {
          id: 2,
          username: "tech AgenciFlow",
          first_name: "Tech",
          last_name: "AgenciFlow",
          email: "tech@agenciflow.com",
          name: "Tech AgenciFlow",
          avatar_filename:
            "https://sweetp-user-uploads.s3.eu-west-2.amazonaws.com/stage%20/%201684133040520_profile",
          user_job_status: 0,
          mute_notification: 1,
          job_user_id: 2,
          aju_id: 806,
          job_id: 363,
          agency_id: 5,
          user_role: 3,
        },
      },
    },
  },
};

export default ChatSample;
