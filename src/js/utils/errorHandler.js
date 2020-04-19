const errorHandler = (err, handler, message) => {
  if (handler) {
    if (typeof err.text === 'function') {
      err.text().then((error) => handler(JSON.parse(error).message));
    } else {
      err.message === 'Failed to fetch' ? handler(message) : handler(err);
    }
  } else {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default errorHandler;
