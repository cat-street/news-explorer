import { useCallback, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import newsApi from '../../utils/newsApi';
import mainApi from '../../utils/mainApi';
import { apiRoutes } from '../../utils/config';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [openedPopup, setOpenedPopup] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [currentUser, setCurrentUser] = useState({ name: '', _id: null });
  const [newUser, setNewUser] = useState({ email: '', password: '', name: '' });
  const [apiError, setApiError] = useState('');

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

  const removeFromStorage = () => {
    localStorage.removeItem('lastResults');
  };

  const checkStorage = useCallback(() => {
    if (localStorage.getItem('lastResults')) {
      const { data } = JSON.parse(localStorage.getItem('lastResults'));
      setNewsData(data);
      setData(data.slice(0, 3));
      setSearch('results');
    }
  }, [setData, setSearch]);

  const reset = useCallback(() => {
    setNewsData([]);
    setCurrentData([]);
    setSearchStatus('');
    setOpenedPopup('');
    removeFromStorage();
  }, []);

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

  const setUser = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  async function handleRegistration(evt, resetForm) {
    evt.preventDefault();
    try {
      const regStatus = await mainApi.auth(apiRoutes.SIGNUP, newUser);
      if (regStatus) {
        resetForm();
        setApiError('');
        openPopup('success');
        setNewUser({
          email: regStatus.email,
          password: '',
          name: regStatus.name,
        });
      }
    } catch (error) {
      setApiError(error.message);
    }
  }

  async function handleSignIn(evt, resetForm) {
    evt.preventDefault();
    try {
      const response = await mainApi.auth(apiRoutes.SIGNIN, newUser);
      if (response) {
        resetForm();
        setApiError('');
        setCurrentUser({
          name: response.name,
          _id: response._id,
        });
        setNewUser({ email: '', password: '', name: '' });
        setLoggedIn(true);
        setOpenedPopup('');
      }
    } catch (error) {
      setApiError(error.message);
    }
  }

  async function signOut() {
    await mainApi.get(apiRoutes.SIGNOUT);
    setLoggedIn(false);
    setMenuOpened(false);
    setCurrentUser({
      name: '',
      _id: null,
    });
    history.push('/');
  }

  useEffect(() => {
    checkStorage();
  }, [checkStorage]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          signOut={signOut}
        />
        {menuOpened && <Backdrop closePopup={closePopup} />}

        {openedPopup && (
          <PopupWithForm
            openedPopup={openedPopup}
            openPopup={openPopup}
            closePopup={closePopup}
            user={newUser}
            onChange={setUser}
            handleRegistration={handleRegistration}
            handleSignIn={handleSignIn}
            apiError={apiError}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
