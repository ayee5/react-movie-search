#### Getting Started

- Clone the project from repository [github.com/ayee5/react-movie-search](https://github.com/ayee5/react-movie-search)
- In your terminal, cd into the cloned folder and run `npm install`.
- Run `npm start` in your terminal. This runs the application on your local machine.

#### Challenges
- Pagination algorithm was by far the most difficult to get correct. I divided each paginated set into its own group which allows user to go backward or forward. Originally I had the current page as the first paginated result and this did not allow user to go backwards.

#### Design
- I chose paginated links over infinite loader for large result set because it avoids a layer of complexity from having to calculate the window size with respect to scroll position. The trade off is not having all results will be on same page.


#### Future Improvement
- Add css styling to table result, search filter, and paginated links. I would also like to add the poster picture of movies in the results.
