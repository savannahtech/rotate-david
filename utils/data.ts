export const sortOptions = [
  {
    label: "Most Upvotes",
    value: "most-upvotes",
  },
  {
    label: "Least Upvotes",
    value: "least-upvotes",
  },
  {
    label: "Most Comments",
    value: "most-comments",
  },
  {
    label: "Least Comments",
    value: "least-comments",
  },
];

export const tags = [
  { value: "", text: "All" },
  { value: "ui", text: "UI" },
  { value: "ux", text: "UX" },
  { value: "enhancement", text: "Enhancement" },
  { value: "bug", text: "Bug" },
  { value: "feature", text: "Feature" },
];

export const roadmap = [
  {
    type: "planned",
    value: 2,
    color: "orange.100"
  },
  {
    type: "in-progress",
    value: 3,
    color: "purple.100"
  },
  {
    type: "live",
    value: 1,
    color: "blue.300"
  },
];

export const suggestions = [
  {
    id: 1,
    tag: "enhancement",
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    comments: 2,
    votes: 112,
  },
  {
    id: 2,
    tag: "feature",
    title: "Add a dark theme option",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    comments: 4,
    votes: 99,
  },
  {
    id: 3,
    tag: "feature",
    title: "Q&A within the challenge hubs",
    description: "Challenge-specific Q&A would make for easy reference.",
    comments: 1,
    votes: 65,
  },
  {
    id: 4,
    tag: "enhancement",
    title: "Allow image/video upload to feedback",
    description: "Images and screencasts can enhance comments on solutions.",
    comments: 2,
    votes: 51,
  },
  {
    id: 5,
    tag: "feature",
    title: "Ability to follow others",
    description: "Stay updated on comments and solutions other people post.",
    comments: 3,
    votes: 42,
  },
  {
    id: 6,
    tag: "bug",
    title: "Preview images not loading",
    description:
      "Challenge preview images are missing when you apply a filter.",
    comments: 0,
    votes: 3,
  },
];