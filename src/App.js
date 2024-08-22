import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/home';
import { Products } from './components/Products/products';
import { Details } from './components/Details/details';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className='bg-dark text-center text-white p-2'>
          <span className='h2'><span className='bi bi-cart4'></span> Shopp<span className='text-secondary'>ing Site</span></span>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='products/:category' element={<Products />}>
              <Route path='details/:id' element={<Details />}/>
            </Route>
           
            <Route path='*' element={<code className='text-danger'>Page Not Found</code>}/>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
