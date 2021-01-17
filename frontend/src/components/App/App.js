import { useCallback, useState, useEffect } from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';

function App({ language }) {
  const [newsData, setNewsData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [searchStatus, setSearchStatus] = useState('');
  const [apiError, setApiError] = useState('');

  const history = useHistory();

  const [theme, setTheme] = useState('dark');
  const [menuOpened, setMenuOpened] = useState(false);
  const [openedPopup, setOpenedPopup] = useState('');

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', _id: null, lang: language || 'en-US' });
  const [newUser, setNewUser] = useState({ email: '', password: '', name: '' });

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

  const setSearch = useCallback((status) => {
    setSearchStatus(status);
  }, []);

  const setLanguage = useCallback((lang) => {
    setCurrentUser((user) => ({ ...user, lang }));
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
    } else { setSearch(''); }
  }, [setData, setSearch]);

  const reset = useCallback(() => {
    setNewsData([]);
    setCurrentData([]);
    setSearchStatus('');
    setOpenedPopup('');
    removeFromStorage();
  }, []);

  const getNewsFromApi = async (queue) => {
    setSearch('searching');
    const data = await newsApi.getData(queue, currentUser.lang);
    if (data.articles.length === 0) {
      setSearch('no results');
      return;
    }
    const newData = await data.articles.map((el) => ({
      keyword: queue,
      title: el.title,
      text: el.description,
      date: el.publishedAt,
      source: el.source.name,
      link: el.url,
      image: el.urlToImage ? el.urlToImage : '',
    }));
    setNews(newData);
    saveToStorage(newData);
    setData(newData.slice(0, 3));
    setSearch('results');
  };

  const getArticles = useCallback(async () => {
    try {
      const articles = await mainApi.get(apiRoutes.ARTICLES);
      setSavedData(articles);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  }, []);

  const saveArticle = async (article) => {
    try {
      await mainApi.post(apiRoutes.ARTICLES, article);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  };

  const removeArticle = async (id, cardElement) => {
    const path = `${apiRoutes.ARTICLES}/${id}`;
    const cardEl = cardElement;
    try {
      await mainApi.delete(path);
      cardEl.current.style.opacity = 0;
      setTimeout(
        () => setSavedData(savedData.filter((el) => el._id !== id)),
        300,
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  };

  const setUser = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleRegistration = async (evt, resetForm) => {
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
  };

  const handleSignIn = async (evt, resetForm) => {
    evt.preventDefault();
    const { name, ...user } = newUser;
    try {
      const response = await mainApi.auth(apiRoutes.SIGNIN, user);
      if (response) {
        resetForm();
        setApiError('');
        setCurrentUser((prevUser) => ({
          ...prevUser,
          name: response.name,
          _id: response._id,
        }));
        setNewUser({ email: '', password: '', name: '' });
        setLoggedIn(true);
        localStorage.setItem('auth', true);
        setOpenedPopup('');
      }
    } catch (error) {
      setApiError(error.message);
    }
  };

  const signOut = async () => {
    try {
      await mainApi.get(apiRoutes.SIGNOUT);
      setLoggedIn(false);
      localStorage.removeItem('auth');
      setMenuOpened(false);
      setCurrentUser((prevUser) => ({
        ...prevUser,
        name: '',
        _id: null,
      }));
      reset();
      history.push('/');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  };

  const checkCookie = useCallback(async () => {
    try {
      const response = await mainApi.get(apiRoutes.SELF);
      setLoggedIn(true);
      setCurrentUser((prevUser) => ({
        ...prevUser,
        name: response.name,
        _id: response._id,
      }));
    } catch (err) {
      localStorage.removeItem('auth');
    }
  }, []);

  useEffect(() => {
    checkCookie();
    checkStorage();
  }, [checkCookie, checkStorage, history.location]);

  useEffect(() => {
    if (history.location.popup) {
      setOpenedPopup(history.location.popup);
    }
    return () => {
      setOpenedPopup('');
    };
  }, [history]);

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
          signOut={signOut}
          setLanguage={setLanguage}
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
          <ProtectedRoute
            exact
            path="/saved-news"
            isLoggedIn={isLoggedIn}
            component={SavedNews}
            setTheme={changeTheme}
            savedData={savedData}
            getArticles={getArticles}
            removeArticle={removeArticle}
            keywords={keywords}
            setKeywords={setKeywords}
            checkCookie={checkCookie}
          />

          <Route exact path="/">
            <Main
              newsData={newsData}
              setNews={setNews}
              currentData={currentData}
              setData={setData}
              isLoggedIn={isLoggedIn}
              searchStatus={searchStatus}
              setSearch={setSearch}
              getNews={getNewsFromApi}
              saveArticle={saveArticle}
              removeFromStorage={removeFromStorage}
              openPopup={openPopup}
            />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
