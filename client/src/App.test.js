import React from 'react';
import { fireEvent, screen, render, waitForElement } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import { rest } from 'msw';
import Header from './components/Header';
import SavedBooks from './pages/SavedBooks';
import { customRender } from './mocks/test-utils';
import { server } from './mocks/server';
import SearchBooks from './pages/SearchBooks';
import ListItem from './components/ListItem';
import { toast } from 'react-toastify';

test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter><Header /></BrowserRouter>);
  const linkElement = getByText(/Books diary/i);
  expect(linkElement).toBeInTheDocument();
});

describe('books route', () => {

  test('show books', async () => {
    customRender(<BrowserRouter><SavedBooks /></BrowserRouter>)
    expect(await screen.findByText(/John Doe/i)).toBeInTheDocument()
  });

  test('api /books error', async () => {
    server.use(
      rest.get('http://localhost:8080/books', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    customRender(<BrowserRouter><SavedBooks /></BrowserRouter>);
    expect(await screen.findByText(/No books/i)).toBeInTheDocument();

  });

  const book = {
    title: "Mock adventure",
    authors: ['Vernse', 'Duhhig'],
    description: "Simple description",
    imageLinks: {
      smallThumbnail: 'google img url',
      thumbnail: 'origin img'
    },
  };
  
  test('add book success', async () => {
    customRender(<BrowserRouter><ListItem key={Math.random()} book={book} loading={false} /></BrowserRouter>)
    const saveBookBtn = screen.getByText(/Save book/i);
    fireEvent.click(saveBookBtn);
    expect(await screen.findAllByText(/Successfully saved book !!/i)).toBeTruthy();
  });

  test('api add book error', async () => {
    server.use(
      rest.post('http://localhost:8080/books', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    customRender(<BrowserRouter><ListItem key={Math.random()} book={book} loading={false} /></BrowserRouter>)
    const saveBookBtn = screen.getByText(/Save book/i);
    fireEvent.click(saveBookBtn);

    customRender(<BrowserRouter><SavedBooks /></BrowserRouter>);
    expect(await screen.findAllByText(/Server Error occurred!/i)).toBeTruthy();

  });
})

test('api search books', async () => {
  customRender(<BrowserRouter><SearchBooks /></BrowserRouter>);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Brain' } })
  expect(input).toHaveValue("Brain");
})