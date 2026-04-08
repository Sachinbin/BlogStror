const blogData = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    description: "React Hooks revolutionized the way we write React components. Introduced in React 16.8, Hooks allow you to use state and other React features without writing a class component.",
    category: ["React", "JavaScript", "Web Development"],
    author: "Sarah Chen",
    date: "January 15, 2024",
    content: [
      {
        heading: "Why Hooks?",
        text: "Before Hooks, if you wanted to use state in a component, you had to use a class component. This led to complex lifecycle methods and hard-to-follow code."
      },
      {
        heading: "The useState Hook",
        text: "const [count, setCount] = useState(0);"
      },
      {
        heading: "The useEffect Hook",
        text: "useEffect lets you perform side effects in your components. It serves the same purpose as lifecycle methods like componentDidMount."
      },
      {
        heading: "Conclusion",
        text: "Hooks make React code more readable, reusable, and easier to test."
      }
    ]
  },

  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    description: "Explore best practices for creating robust and scalable REST APIs using Node.js and Express.",
    category: ["Node.js", "API", "Backend"],
    author: "Sarah Chen",
    date: "January 20, 2024",
    content: [
      {
        heading: "Why Node.js?",
        text: "Node.js is built on Chrome's V8 engine and is ideal for building fast and scalable network applications."
      },
      {
        heading: "Best Practices",
        text: "Use MVC architecture, proper error handling, and environment variables to build scalable APIs."
      },
      {
        heading: "Conclusion",
        text: "With the right structure and tools, Node.js can handle large-scale applications efficiently."
      }
    ]
  },

  {
    id: 3,
    title: "The Art of Clean Code",
    description: "Discover the principles and practices that separate good code from great code.",
    category: ["Programming Best Practices", "Software Engineering"],
    author: "Marcus Johnson",
    date: "February 1, 2024",
    content: [
      {
        heading: "Readable Code",
        text: "Code should be written for humans first, then machines."
      },
      {
        heading: "Naming Matters",
        text: "Use meaningful variable and function names."
      },
      {
        heading: "Conclusion",
        text: "Clean code improves maintainability and reduces bugs."
      }
    ]
  }
];

export default blogData;