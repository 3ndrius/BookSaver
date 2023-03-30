// src/mocks/handlers.js
import { rest } from 'msw'


const mockData = {
  books: [{
    authors: ["John Doe"],
    description: "Lorem ipsum",
    imageLinks: {
      smallThumbnail: "image small",
      thumbnail: "image"
    },
    title: "Simple title",
    infoLink: "Simple link",
    __v: "Simple number string",
    _id: Math.random(),
  }],
  success: true,
};


export const handlers = [
  rest.post('http://localhost:8080/books', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({})
    )
  }),

  rest.get('http://localhost:8080/books', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockData)
    )
  }),
];