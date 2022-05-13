const ApiError = require('../exceptions/apiError');

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.json({
      status: err.status,
      message: err.message,
      error: err.error,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
