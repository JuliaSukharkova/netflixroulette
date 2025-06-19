import { render } from "@testing-library/react";
import { MovieItem } from "../components/MovieForm/MovieItem";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../costants/costants";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store"

// describe("renders Movie component", () => {
//   it("renders Movie component", () => {
//     const newMovie = {
//         id: 12345,
//         title: 'Emily',
//         release_date: '2022-02-02',
//         poster_path: 'http://www.img.com',
//         genres: ['Comedy'],
//       };
//       const mockStore = configureMockStore();
//       const store = mockStore({
//         movies: {
//           movies: []
//         }
//       });
//     render(
//       <ThemeProvider theme={theme}>
//         <Provider store={store}>
//         <BrowserRouter>
//         <MovieItem
//           {...newMovie}
//         />
//         </BrowserRouter>
//         </Provider>
//       </ThemeProvider>
//     );
//     expect('Emily').toEqual(newMovie.title)
//     expect('2022-02-02').toEqual(newMovie.release_date)
//     expect('http://www.img.com').toEqual(newMovie.poster_path)
//     expect(["Comedy"]).toEqual(newMovie.genres);  
//   });
// });
