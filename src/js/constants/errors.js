const errors = {
  ALREADY_EXIST_ERROR: 'Такой пользователь уже есть',
  WRONG_EMAIL_ERROR: 'Адрес почты указан в неверном формате',
  MISSING_VALUE_ERROR: 'Необходимо заполнить поле',
  MISSING_SEARCH_VALUE_ERROR: 'Нужно ввести ключевое слово',
  TYPE_SEARCH_VALUE: 'Введите тему новости',
  PASSWORD_LENGTH_ERROR: 'Пароль должен быть минимум 8 символов',
  NAME_LENGTH_ERROR: 'Имя должно быть от 2 до 30 символов',
  NO_RESULT: 'Ничего не найдено',
  NO_ARTICLES: 'нет',
  GET_RESULT_ERROR:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  NO_INTERNET: 'Проблема с Интернет-соединением',
};

export default errors;
