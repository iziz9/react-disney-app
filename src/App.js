import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      {/* Nav는 모든페이지에서 보여줄것 */}

      <Outlet />
    </div>
  )
}



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path='main' element={<MainPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path=':movieId' element={<DetailPage />} />
      </Route>
    </Routes>
  )


}


export default App;
