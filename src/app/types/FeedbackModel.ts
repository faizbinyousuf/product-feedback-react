export interface FeedbackModel {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  upvotes: number;
  comments: Comment[];
  user: User;
}

export interface User {
  id: string;
  image: string;
  name: string;
  username: string;
}
interface Comment {
  id: string;
  content: string;
  user: User;
  replies?: Reply[];
}
interface Reply {
  id: string;
  content: string;
  replyingTo: string;
  user: User;
}

export const feedbackList: FeedbackModel[] = [
  {
    id: "1",
    title: "Feature Request: Add Dark Mode",
    description:
      "Allow users to toggle between light and dark themes. This would improve usability in low-light environments.",
    category: "Feature",
    status: "In-Progress",
    upvotes: 42,
    comments: [
      {
        id: "1",
        content:
          "This would be a great addition! My eyes hurt at night using the light theme.",
        user: {
          id: "1",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          name: "John Doe",
          username: "johndoe",
        },
        replies: [
          {
            id: "1-1",
            content:
              "Same here! I mostly code late at night. This would be a great addition! My eyes hurt at night using the light theme. I would really appreciate this feature. Same here! I mostly code late at night. I would really appreciate this feature.",
            replyingTo: "johndoe",
            user: {
              id: "1",
              image: "https://randomuser.me/api/portraits/women/15.jpg",
              name: "Sarah Lee",
              username: "sarahlee",
            },
          },
          {
            id: "1-2",
            content: "I think it should follow the system theme automatically.",
            replyingTo: "sarahlee",
            user: {
              id: "1",
              image: "https://randomuser.me/api/portraits/men/18.jpg",
              name: "Alex Johnson",
              username: "alexjohnson",
            },
          },
        ],
      },
      {
        id: "2",
        content:
          "It would be even better if the theme color could be customized!",
        user: {
          id: "1",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          name: "Kevin Parker",
          username: "kevinparker",
        },
      },
    ],
    user: {
      id: "1",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Louis Tomlinson",
      username: "louistomlinson",
    },
  },
  {
    id: "2",
    title: "Bug: Notifications Not Working",
    description:
      "Users are not receiving notifications for new comments and upvotes.",
    category: "Bug",
    status: "Planned",
    upvotes: 17,
    comments: [
      {
        id: "1",
        content: "I missed several updates because of this issue.",
        user: {
          id: "2",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          name: "Michael Chen",
          username: "mchen",
        },
      },
      {
        id: "2",
        content: "I can confirm this. No notifications for the last 2 days.",
        user: {
          id: "1",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          name: "Aisha Khan",
          username: "aishak",
        },
        replies: [
          {
            id: "2-1",
            content: "Yes, seems to be server-related. Restart fixed it once.",
            replyingTo: "aishak",
            user: {
              id: "2",
              image: "https://randomuser.me/api/portraits/men/25.jpg",
              name: "Carlos Mendes",
              username: "cmendes",
            },
          },
        ],
      },
    ],
    user: {
      id: "2",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
      name: "Zachary Loeber",
      username: "zloeber",
    },
  },
  {
    id: "3",
    title: "Enhancement: Improve Dashboard Layout",
    description:
      "The dashboard looks cluttered. Suggest reorganizing widgets and making charts responsive.",
    category: "Enhancement",
    status: "Live",
    upvotes: 28,
    comments: [
      {
        id: "1",
        content: "Agree. The charts overlap on smaller screens.",
        user: {
          id: "3",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          name: "Tom Cook",
          username: "tomcook",
        },
        replies: [
          {
            id: "1",
            content: "I can help redesign it using Flex and Grid layout.",
            replyingTo: "tomcook",
            user: {
              id: "1",
              image: "https://randomuser.me/api/portraits/women/33.jpg",
              name: "Anna White",
              username: "annawhite",
            },
          },
        ],
      },
    ],
    user: {
      id: "1",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      name: "Young Frankenstein",
      username: "frankenstein",
    },
  },
  {
    id: "4",
    title: "UI: Improve Button Accessibility",
    description:
      "Increase contrast and font size for buttons to improve accessibility for users with low vision.",
    category: "UI",
    status: "Planned",
    upvotes: 12,
    comments: [],
    user: {
      id: "1",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      name: "Peter Parker",
      username: "peterparker",
    },
  },
  {
    id: "5",
    title: "Feature Request: Multi-language Support",
    description:
      "Allow users to choose between English, Spanish, Arabic, and French from settings.",
    category: "UX",
    status: "In-Progress",
    upvotes: 61,
    comments: [
      {
        id: "1",
        content: "Please add Arabic support soon!",
        user: {
          id: "1",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          name: "Ahmed Saleh",
          username: "ahmeds",
        },
        replies: [
          {
            id: "1-1",
            content: "Yes! Right-to-left layout is essential for Arabic.",
            replyingTo: "ahmeds",
            user: {
              id: "1",
              image: "https://randomuser.me/api/portraits/women/35.jpg",
              name: "Fatima Noor",
              username: "fatimanoor",
            },
          },
        ],
      },
    ],
    user: {
      id: "1",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      name: "Alice Johnson",
      username: "alicejohnson",
    },
  },
  {
    id: "6",
    title: "Bug: Image Upload Fails on Slow Internet",
    description: "Uploading images sometimes times out on slower connections.",
    category: "Bug",
    status: "Planned",
    upvotes: 22,
    comments: [
      {
        id: "1",
        content: "Maybe implement chunked uploads?",
        user: {
          id: "1",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          name: "Jane Doe",
          username: "janedoe123",
        },
      },
    ],
    user: {
      id: "1",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      name: "Steve Jobs",
      username: "stevejobs",
    },
  },
  {
    id: "7",
    title: "Other: Add Keyboard Shortcuts",
    description:
      "Keyboard shortcuts for navigation and saving would make power users faster.",
    category: "Other",
    status: "Live",
    upvotes: 48,
    comments: [
      {
        id: "1",
        content: "Great idea! Ctrl+S should save instantly.",
        user: {
          id: "1",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          name: "Sam Rogers",
          username: "samrogers",
        },
        replies: [
          {
            id: "1-1",
            content: "Also add `Esc` to close modals!",
            replyingTo: "samrogers",
            user: {
              id: "1",
              image: "https://randomuser.me/api/portraits/women/42.jpg",
              name: "Lisa Kim",
              username: "lisakim",
            },
          },
        ],
      },
    ],
    user: {
      id: "1",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      name: "Elon Tusk",
      username: "elontusk",
    },
  },
];
