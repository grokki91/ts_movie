import Movie from '../app/Movie';
import Cart from '../app/Cart';

describe('Check class Movie', () => {
  const cinema = new Movie(10, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000);
  test(('Check creating object'), () => {
    const expectedResult = { id: 10, title: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble!', genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: 137, price: 1000 };
    expect(cinema).toEqual(expectedResult);
  })

  test(('Check adding to cart'), () => {
    const expectedResult = [{ id: 10, title: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble!', genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: 137, price: 1000 }];
    const cart = new Cart;
    cart.add(cinema);
    expect(cart.items).toEqual(expectedResult)
  })

  test(('Check total sum without discount'), () => {
    const newCinema = new Movie(15, 'Аватар', 2009, 'США', 'Wow', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1500, 10);
    const cart = new Cart;
    cart.add(cinema);
    cart.add(newCinema);
    expect(cart.getTotalPriceWithoutDiscount()).toBe(2500)
  })

  test(('Check total with discount'), () => {
    const newCinema = new Movie(15, 'Аватар', 2009, 'США', 'Wow', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1500, 15);
    const cart = new Cart;
    cart.add(cinema);
    cart.add(newCinema);
    expect(cart.getTotalPrice()).toBe(2500)
  })
})


