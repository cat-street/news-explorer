import { useCallback, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import newsApi from '../../utils/newsApi';
import './App.css';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [openedPopup, setOpenedPopup] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  const history = useHistory();

  const changeTheme = (value) => {
    setTheme(value);
  };

  const toggleMenu = (value) => {
    setMenuOpened(value);
  };

  const setNews = useCallback((arr) => {
    setNewsData(arr);
  }, []);

  const setData = useCallback((arr) => {
    setCurrentData(arr);
  }, []);

  const setSaved = useCallback((arr) => {
    setSavedData(arr);
  }, []);

  const setSearch = useCallback((status) => {
    setSearchStatus(status);
  }, []);

  const reset = useCallback(() => {
    setNewsData([]);
    setCurrentData([]);
    setSavedData([]);
    setSearchStatus('');
    setOpenedPopup('');
  }, []);

  const openPopup = (popup) => {
    setOpenedPopup(popup);
  };

  const closePopup = () => {
    toggleMenu(false);
    setOpenedPopup('');
  };

  const saveToStorage = (data) => {
    localStorage.setItem('lastResults', JSON.stringify({ data }));
  };

  const getNewsFromApi = async (keyword) => {
    setSearch('searching');
    const data = await newsApi.getData(keyword);
    if (data.articles.length === 0) {
      setSearch('no results');
      return;
    }
    setNews(data.articles);
    saveToStorage(data.articles);
    setData(data.articles.slice(0, 3));
    setSearch('results');
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
        reset={reset}
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
          <SavedNews
            setTheme={changeTheme}
            savedData={savedData}
            setSaved={setSaved}
            reset={reset}
          />
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
            getNews={getNewsFromApi}
          />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
