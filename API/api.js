export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];


export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    domain: "bbc.com",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    domain: "cnn.com",
    pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    domain: "foxnews.com",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "the guardian",
    name: "The Guardian",
    domain: "theguardian.com",
    pic: "https://seeklogo.com/images/T/The_Guardian-logo-A1290A063A-seeklogo.com.png",
  },
  
];

export const BASE_URL_EVERYTHING = "https://newsapi.org/v2/everything?";

export const BASE_URL_TOP_HEADLINES = "https://newsapi.org/v2/top-headlines?";


export const getNewsAPI = (category,country="in") => {
  return `${BASE_URL_TOP_HEADLINES}country=${country}&category=${category}&apiKey=78c16249d4434fa7ad9097fdcc807367`;
};

export const getSourceApi = (source) => {
  console.log(`here--${BASE_URL_EVERYTHING}domains=${source}&language=en&sortBy=popularity&apiKey=78c16249d4434fa7ad9097fdcc807367`)
  return `${BASE_URL_EVERYTHING}domains=${source}&language=en&sortBy=popularity&apiKey=78c16249d4434fa7ad9097fdcc807367`;
};

export const getSearchNewsAPI = (text) => {
  return `${BASE_URL_EVERYTHING}q=${text}&pageSize=20&apiKey=78c16249d4434fa7ad9097fdcc807367`;
};