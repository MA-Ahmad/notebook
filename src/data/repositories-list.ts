import coverImages from "./cover_images";

const repositoriesList = [
  {
    id: 0,
    title: "Portfolio",
    desc: "Personal portfolio app to show my skills and experience.",
    technologies: [
      { name: "React", color: "green" },
      { name: "ChakraUi", color: "teal" }
    ],
    stars: 12,
    githubLink: "https://github.com/MA-Ahmad/portfolio",
    liveLink: "https://mahmad.me/",
    coverImage: coverImages[2],
    blurHash: "U4S~x501-;~pRiNGIURjRjIoM{xbNFR*Rjay"
  },
  {
    id: 1,
    title: "Notebook App",
    desc: "Create notes for your daily important work.",
    technologies: [
      { name: "React", color: "green" },
      { name: "Typescript", color: "blue" },
      { name: "ChakraUi", color: "teal" }
    ],
    stars: 11,
    githubLink: "https://github.com/MA-Ahmad/notebook",
    liveLink: "",
    coverImage: coverImages[4],
    blurHash: "U4S~x6WE~WwJ=|VsMybb%NVt8_tP%2RQRknl"
  },
  {
    id: 2,
    title: "Blog App",
    desc: "A Blog App built by using React, ChakraUI and Formik.",
    technologies: [
      { name: "React", color: "green" },
      { name: "ChakraUi", color: "teal" }
    ],
    stars: 9,
    githubLink: "https://github.com/MA-Ahmad/reactBlog",
    liveLink: "https://ma-ahmad.github.io/reactBlog",
    coverImage: coverImages[0],
    blurHash: "ULM*T}IV~pxt00%LRjNG9~IVadt6?vxtD%Rj"
  },
  {
    id: 3,
    title: "Blog App + Authentication",
    desc: "A Blog App built by using React, Rails, ChakraUI and Formik.",
    technologies: [
      { name: "React", color: "green" },
      { name: "Rails", color: "red" },
      { name: "ChakraUi", color: "teal" }
    ],
    stars: 6,
    githubLink: "https://github.com/MA-Ahmad/blog-app-react-frontend",
    liveLink: "https://blog-frontend-react.herokuapp.com/",
    coverImage: coverImages[1],
    blurHash: "UQNTzZHr~Wtl00={M{NG0dIokDxaloO?IUnO"
  },
  {
    id: 4,
    title: "Image Gallery",
    desc: "This app built by using Tailwind CSS with React and Pixabay API.",
    technologies: [
      { name: "React", color: "green" },
      { name: "Tailwindcss", color: "telegram" }
    ],
    stars: 2,
    githubLink: "https://github.com/MA-Ahmad/react-image-gallery",
    liveLink: "",
    coverImage: coverImages[3],
    blurHash: "U]OzA2n%W;ayRPn%fkWVx]bHjFj[_NWXofay"
  },
  {
    id: 5,
    title: "Crud Demo App",
    desc: "A simple react+rails(RR) CRUD app with tailwindcss.",
    technologies: [
      { name: "React", color: "green" },
      { name: "Rails", color: "red" },
      { name: "Tailwindcss", color: "telegram" }
    ],
    stars: 2,
    githubLink: "https://github.com/MA-Ahmad/react_rails_blog",
    liveLink: "https://react-on-rails-blog.herokuapp.com/",
    coverImage: coverImages[5],
    blurHash: "UEPGv.9FRkfR00%N%NofItxas-j@?dD%D%fj"
  },
  {
    id: 6,
    title: "Scrapper App",
    desc: "A simple rails scrapper app to count html tags of a web page.",
    technologies: [{ name: "Rails", color: "red" }],
    stars: 1,
    githubLink: "https://github.com/MA-Ahmad/rails-app",
    liveLink: "https://urltohtmlapp.herokuapp.com/",
    coverImage: "",
    blurHash: "UEPGv.9FRkfR00%N%NofItxas-j@?dD%D%fj"
  }
];

export default repositoriesList;
