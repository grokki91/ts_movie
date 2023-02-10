import Movie from '../app/Movie';
import Cart from '../app/Cart';

describe('Check class Movie', () => {
  const cinema = new Movie(10, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000, 15);
  test(('Check creating object'), () => {
    const expectedResult = { id: 10, title: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble!', genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: 137, price: 1000, discount: 15 };
    expect(cinema).toEqual(expectedResult);
  })

  test(('Check adding to cart'), () => {
    const expectedResult = [{ id: 10, title: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble!', genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: 137, price: 1000, discount: 15 }];
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
    const newCinema = new Movie(15, 'Аватар', 2009, 'США', 'Wow', ['фантастика', 'боевик', 'фэнтези'], 137, 2000, 10);
    const newCinema2 = new Movie(10, 'Аватар 2', 2022, 'США', 'Wow', ['фантастика', 'боевик', 'фэнтези'], 137, 3000, 10);

    const cart = new Cart;
    cart.add(newCinema);
    cart.add(newCinema2);
    expect(cart.getTotalPrice()).toBe(4500)
  })

  test(('Delete object'), () => {
    const newCinema = new Movie(15, 'Аватар', 2009, 'США', 'Wow', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1500, 15);
    const newCinema2 = new Movie(20, 'Титаник', 1997, 'США', 'Super', ['драма', 'история', 'мелодрамма'], 194, 1500, 10);
    const expectedResult = [
      {"country": "США", "discount": 15, "genre": ["фантастика", "боевик", "фэнтези", "приключения"], "id": 15, "price": 1500, "slogan": "Wow", "time": 137, "title": "Аватар", "year": 2009},
      {"country": "США", "discount": 10, "genre": ["драма", "история", "мелодрамма"], "id": 20, "price": 1500, "slogan": "Super", "time": 194, "title": "Титаник", "year": 1997}
    ];
    const cart = new Cart;
    cart.add(cinema);
    cart.add(newCinema);
    cart.add(newCinema2);
    expect(cart.deleteProduct(10)).toEqual(expectedResult)
  })
})


