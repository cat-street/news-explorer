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
  const [keywords, setKeywords] = useState([]);
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

  const getNewsFromApi = async (queue) => {
    setSearch('searching');
    const data = await newsApi.getData(queue);
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
    const articles = await mainApi.get(apiRoutes.ARTICLES);
    setSavedData(articles);
  }, []);

  const saveArticle = async (article) => {
    const result = await mainApi.post(apiRoutes.ARTICLES, article);
    return result;
  };

  const removeArticle = async (id, cardElement) => {
    const path = `${apiRoutes.ARTICLES}/${id}`;
    const cardEl = cardElement;
    await mainApi.delete(path);
    cardEl.current.style.opacity = 0;
    setTimeout(
      () => setSavedData(savedData.filter((el) => el._id !== id)),
      300,
    );
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
  };

  const signOut = async () => {
    await mainApi.get(apiRoutes.SIGNOUT);
    setLoggedIn(false);
    setMenuOpened(false);
    setCurrentUser({
      name: '',
      _id: null,
    });
    reset();
    history.push('/');
  };

  const checkCookie = useCallback(async () => {
    try {
      const response = await mainApi.get(apiRoutes.SELF);
      setCurrentUser({
        name: response.name,
        _id: response._id,
      });
      setLoggedIn(true);
      return response;
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    checkCookie();
    checkStorage();
  }, [checkCookie, checkStorage]);

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
              getArticles={getArticles}
              removeArticle={removeArticle}
              keywords={keywords}
              setKeywords={setKeywords}
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
              saveArticle={saveArticle}
            />
          </Route>
        </Switch>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
