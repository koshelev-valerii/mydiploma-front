import './style.css';


import MainApi from './js/api/MainApi/MainApi';
import config from './js/constants/config';
import switchPopup from './js/utils/switchPopup';
import renderPage from './js/utils/renderPage';
import toggleSaveButton from './js/utils/toggleSaveButton';
import { handlerResizeMenu } from './js/utils/handlerResizeMenu';

import errors from './js/constants/errors';

import {
  Header,
  Popup,
  Form,
  Search,
  Results,
  NewsCard,
} from './js/components/components';

import NewsApi from './js/api/NewsApi/NewsApi';

import convertCardData from './js/utils/convertCardData';
import errorHandler from './js/utils/errorHandler';

const {
  SERVER_URL,
  NEWSAPI_URL,
  NEWSAPI_TOKEN,
  LAST_DAY,
  CARD_AMOUNT,
} = config;

const { GET_RESULT_ERROR, NO_INTERNET } = errors;

const mainApi = new MainApi({
  url: SERVER_URL,
});

const newsApi = new NewsApi({
  url: NEWSAPI_URL,
  headers: {
    authorization: NEWSAPI_TOKEN,
  },
  lastDay: LAST_DAY,
});

const signupForm = new Form('#popup-register');
const successForm = new Form('#popup-success');
const signinForm = new Form('#popup-signin');
const header = new Header(document.querySelector('.header'), false);
const popup = new Popup(document.querySelector('.popup'));
const search = new Search(document.querySelector('.content__field'));
const results = new Results(document.querySelector('.results'), false);

switchPopup(signinForm, signupForm, popup);
switchPopup(signupForm, signinForm, popup);
switchPopup(successForm, signinForm, popup);

if (localStorage.getItem('token')) {
  renderPage(mainApi, header);
}

window.addEventListener('resize', () => handlerResizeMenu(header, popup));


const headerButtonHandler = (e) => {
  e.preventDefault();

  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    header.render({ isLoggedIn: false });
  } else {
    popup.open(signinForm.element, signinForm.clear);
    if (window.matchMedia('(max-width: 660px)').matches) {
      header.toggleMenu();
    }
  }
};

const headerMenuHandler = (e) => {
  if (
    window.matchMedia('(max-width: 660px)').matches
    && e.target.classList.contains('header__menu')
  ) {
    header.toggleMenuButton();
    if (!document.querySelector('.popup_is-opened')) {
      header.toggleMenu();
    } else {
      popup.close();
    }
  }
};

header.setListeners([
  {
    event: 'click',
    element: '.header__button',
    callback: (e) => headerButtonHandler(e),
  },
  {
    event: 'click',
    element: '.header__menu',
    callback: (e) => headerMenuHandler(e),
  },
]);

const signinFormHandler = (e) => {
  e.preventDefault();
  signinForm.toggleLockForm(true);

  mainApi
    .signin(signinForm.getInputValues())
    .then((data) => {
      signinForm.toggleLockForm(false);
      localStorage.setItem('token', data.token);
      renderPage(mainApi, header);
      popup.close();
      if (window.matchMedia('(max-width: 660px)').matches) {
        header.toggleMenuButton();
      }
    })
    .catch((err) => {
      signinForm.toggleLockForm(false);
      errorHandler(err, signinForm.setSubmitError, NO_INTERNET);
    });
};

const signupFormHandler = (e) => {
  e.preventDefault();
  signupForm.toggleLockForm(true);

  mainApi
    .signup(signupForm.getInputValues())
    .then(() => {
      signupForm.toggleLockForm(false);
      popup.clearContent();
      popup.setContent(successForm.element);
    })
    .catch((err) => {
      signupForm.toggleLockForm(false);
      errorHandler(err, signupForm.setSubmitError, NO_INTERNET);
    });
};

signinForm.setListeners([
  {
    event: 'click',
    element: '.popup__form-button',
    callback: (e) => signinFormHandler(e),
  },
]);

signupForm.setListeners([
  {
    event: 'click',
    element: '.popup__form-button',
    callback: (e) => signupFormHandler(e),
  },
]);

const cornerButtonHandler = (e, card, data) => {
  e.preventDefault();
  e.stopPropagation();

  if (localStorage.getItem('token')) {
    if (e.target.classList.contains('card__corner-button_saved')) {
      mainApi
        .deleteBookmark(card.id)
        .then(() => {
          e.target.classList.toggle('card__corner-button_saved');
        })
        .catch((err) => {
          errorHandler(err);
        });
    } else {
      mainApi
        .addBookmark(data)
        .then((res) => {
          e.target.classList.toggle('card__corner-button_saved');
          card.id = res.data._id;
        })
        .catch((err) => {
          errorHandler(err);
        });
    }
  }
};

const addNewCard = (data) => {
  const newsCardData = convertCardData(data, search);

  const newsCardElement = new NewsCard(newsCardData, '.card-template');
  newsCardElement.setListeners([
    {
      event: 'click',
      element: '.card__corner-button',
      callback: (e) => cornerButtonHandler(e, newsCardElement, newsCardData),
    },
    {
      event: 'click',
      element: '.card',
      callback: () => {
        window.open(newsCardData.link, '_blank');
      },
    },
    {
      event: 'resize',
      element: 'window',
      callback: newsCardElement.truncateCardText,
    },
  ]);

  results.renderedCards.push(newsCardElement);
  results.insertElement(newsCardElement.node);
};

const searchHandler = (e) => {
  e.preventDefault();
  search.toggleLockForm();

  results.show();
  if (results.renderedCards.length > 0) {
    results.renderedCards.forEach((card) => {
      card.remove();
    });
    results.renderedCards = [];
  }

  newsApi
    .getNews(search.input)
    .then((res) => {
      search.toggleLockForm();
      results.togglePreloader(false);
      results.cardsData = res.articles;
      if (res.articles.length > 0) {
        for (let i = 0; i < CARD_AMOUNT; i++) {
          if (res.articles[i]) {
            addNewCard(res.articles[i]);
          } else {
            break;
          }
        }
        if (res.articles.length > CARD_AMOUNT) {
          results.toggleMoreCards(true);
          results.counter = 3;
        }
      } else if (res.articles.length === 0) {
        results.toggleNoResults(true);
      }
    })
    .catch((err) => {
      search.toggleLockForm();
      results.togglePreloader(false);
      errorHandler(err, results.setMessageError, GET_RESULT_ERROR);
    });
};

const moreCardsHandler = () => {
  for (let i = results.counter; i < results.counter + CARD_AMOUNT; i++) {
    if (results.cardsData[i]) {
      addNewCard(results.cardsData[i]);
    } else {
      results.toggleMoreCards(false);
      break;
    }
  }
  results.counter += CARD_AMOUNT;
};

search.setListeners([
  {
    event: 'click',
    element: '.field__button',
    callback: (e) => searchHandler(e),
  },
]);

results.setListeners([
  {
    event: 'click',
    element: '.results__button',
    callback: moreCardsHandler,
  },
  {
    event: 'mouseover',
    element: '.results__list',
    callback: toggleSaveButton,
  },
  {
    event: 'mouseout',
    element: '.results__list',
    callback: toggleSaveButton,
  },
]);
