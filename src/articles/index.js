import './style.css';
import config from '../js/constants/config';
import errors from '../js/constants/errors';

import MainApi from '../js/api/MainApi/MainApi';

import {
  Header,
  Results,
  NewsCard,
  ArticleInfo,
} from '../js/components/components';

import renderPage from '../js/utils/renderPage';
import errorHandler from '../js/utils/errorHandler';
import { handlerResizeMenuLoggedIn } from '../js/utils/handlerResizeMenu';

const { GET_RESULT_ERROR } = errors;

const mainApi = new MainApi({
  url: config.SERVER_URL,
});

const header = new Header(document.querySelector('.header'), true);
const results = new Results(document.querySelector('.results'), true);
const articleInfo = new ArticleInfo(document.querySelector('.article-info'));

window.addEventListener('resize', () => handlerResizeMenuLoggedIn(header));

if (localStorage.getItem('token')) {
  renderPage(mainApi, header, articleInfo);
} else {
  window.location.href = '../index.html';
}

const headerButtonHandler = (e) => {
  e.preventDefault();
  localStorage.removeItem('token');
  window.location.href = '../index.html';
};

const headerMenuHandler = (e) => {
  if (
    window.matchMedia('(max-width: 660px)').matches
    && e.target.classList.contains('header__menu')
  ) {
    header.toggleMenuButton();
    header.toggleMenu();
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

const cornerButtonHandler = (e, card, data) => {
  e.preventDefault();
  e.stopPropagation();
  // eslint-disable-next-line no-alert
  if (window.confirm('Вы действительно хотите удалить эту новость?')) {
    mainApi
      .deleteBookmark(data._id)
      .then(() => {
        articleInfo.changeSummary(data.keyword);
        card.remove();
        results.renderedCards.pop();
        if (results.renderedCards.length === 0) {
          results.hide();
        }
      })
      .catch((err) => {
        errorHandler(err);
      });
  }
};

results.show();

mainApi
  .getArticles()
  .then((res) => {
    results.togglePreloader(false);
    res.forEach((cardData) => {
      articleInfo.createSummary(cardData.keyword);

      const newsCardElement = new NewsCard(cardData, '.card-bookmark-template');
      newsCardElement.setListeners([
        {
          event: 'click',
          element: '.card__corner-button',
          callback: (e) => cornerButtonHandler(e, newsCardElement, cardData),
        },
        {
          event: 'click',
          element: '.card',
          callback: () => {
            window.open(cardData.link, '_blank');
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
      articleInfo.counter += 1;
    });

    articleInfo.sortSummary();
  })
  .catch((err) => {
    results.togglePreloader(false);
    errorHandler(err, results.setMessageError, GET_RESULT_ERROR);
  });
