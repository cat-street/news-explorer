import { useState, useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [menuOpened, setMenuOpened] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [openedPopup, setOpenedPopup] = useState('');
  const [searchStatus, setSearchStatus] = useState('results');

  const history = useHistory();

  const changeTheme = (value) => {
    setTheme(value);
  };

  const toggleMenu = (value) => {
    setMenuOpened(value);
  };

  const setNews = (arr) => {
    setNewsData(arr);
  };

  const setData = useCallback((arr) => {
    setCurrentData(arr);
  }, []);

  const setSearch = (status) => {
    setSearchStatus(status);
  };

  const openPopup = (popup) => {
    setOpenedPopup(popup);
  };

  const closePopup = () => {
    toggleMenu(false);
    setOpenedPopup('');
  };

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setMenuOpened(false);
    history.push('/');
  };

  return (
    <div className="app">
      <ScrollToTop />

      <Header
        theme={theme}
        menuOpened={menuOpened}
        toggleMenu={toggleMenu}
        isLoggedIn={isLoggedIn}
        openPopup={openPopup}
        openedPopup={openedPopup}
        login={login}
        logout={logout}
      />
      {menuOpened && <Backdrop closePopup={closePopup} />}

      {openedPopup && (
        <PopupWithForm
          openedPopup={openedPopup}
          openPopup={openPopup}
          closePopup={closePopup}
        />
      )}

      <Switch>
        <Route path="/saved-news">
          <SavedNews setTheme={changeTheme} />
        </Route>
        <Route path="/">
          <Main
            newsData={newsData}
            setNews={setNews}
            currentData={currentData}
            setData={setData}
            isLoggedIn={isLoggedIn}
            searchStatus={searchStatus}
            setSearch={setSearch}
          />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
