export interface FeedbackModel {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  upvotes: number;
  comments: string[];
  user: {
    image: string;
    name: string;
    username: string;
  };
}

export const feedbackList: FeedbackModel[] = [
  {
    id: "1",
    title: "Feature request: Add a dark mode toggle",
    description:
      "As a user, I want to be able to toggle between light and dark modes on the website so that I can adjust the appearance to my preference.",
    category: "Feature",
    status: "In-Progress",
    upvotes: 5,
    comments: [
      "I agree with this idea. It would be great to have a dark mode toggle on the website.",
      "I completely agree with this. It would be great to have a dark mode toggle on the website.",
    ],
    user: {
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "Louis Tomlinson",
      username: "louis_tomlinson",
    },
  },
  {
    id: "2",
    title: "Bug: Navigation menu is not working",
    description:
      "As a user, I want to be able to navigate between different sections of the website so that I can find what I'm looking for.",
    category: "Bug",
    status: "Planned",
    upvotes: 3,
    comments: [
      "I'm having some issues with the navigation menu. It's not working as expected.",
      "I'm having some issues with the navigation menu. It's not working as expected.",
    ],
    user: {
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "Zachary Loeber",
      username: "zloeber",
    },
  },

  {
    id: "3",
    title: "Feature request: Add a dark mode toggle",
    description:
      "As a user, I want to be able to toggle between light and dark modes on the website so that I can adjust the appearance to my preference.",
    category: "Enhancement",
    status: "Live",
    upvotes: 5,
    comments: [
      "I agree with this idea. It would be great to have a dark mode toggle on the website.",
      "I completely agree with this. It would be great to have a dark mode toggle on the website.",
    ],
    // add another user other than Tom Cook
    user: {
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "Young Frankenstein",
      username: "frankenstein",
    },
  },
  {
    id: "4",
    title: "Bug: Navigation menu is not working",
    description:
      "As a user, I want to be able to navigate between different sections of the website so that I can find what I'm looking for.",
    category: "UI",
    status: "Planned",
    upvotes: 3,
    comments: [],
    user: {
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "Peter Parker",
      username: "peterparker",
    },
  },
  {
    id: "5",
    title: "Feature request: Add a dark mode toggle",
    description:
      "As a user, I want to be able to toggle between light and dark modes on the website so that I can adjust the appearance to my preference.",
    category: "UX",
    status: "In-Progress",
    upvotes: 5,
    comments: [],
    user: {
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "Alice Johnson",
      username: "alicejohnson",
    },
  },
  {
    id: "6",
    title: "Bug: Navigation menu is not working",
    description:
      "As a user, I want to be able to navigate between different sections of the website so that I can find what I'm looking for.",
    category: "Bug",
    status: "Planned",
    upvotes: 3,
    comments: [],
    user: {
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "Jane Doe",
      username: "janedoe123",
    },
  },
  {
    id: "7",
    title: "Other: Test in UAT",
    description:
      "As a user, I want to be able to toggle between light and dark modes on the website so that I can adjust the appearance to my preference.",
    category: "Other",
    status: "Live",
    upvotes: 5,
    comments: [
      "I agree with this idea. It would be great to have a dark mode toggle on the website.",
      "I completely agree with this. It would be great to have a dark mode toggle on the website.",
      "I agree with this idea. It would be great to have a dark mode toggle on the website.",
      "I completely agree with this. It would be great to have a dark mode toggle on the website.",
      "I agree with this idea. It would be great to have a dark mode toggle on the website.",
      "I completely agree with this. It would be great to have a dark mode toggle on the website.",
      "I agree with this idea. It would be great to have a dark mode toggle on the website.",
      "I completely agree with this. It would be great to have a dark mode toggle on the website.",
    ],
    user: {
      image:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "Steve Jobs",
      username: "stevejobs",
    },
  },
];
