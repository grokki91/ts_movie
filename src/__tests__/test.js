import Movie from '../Movie'

test(('Check class Movie'), () => {
  const cinema = new Movie(10, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137)
  const expectedResult = { id: 10, title: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble!', genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: 137 }
  expect(cinema).toBe(expectedResult)
})
