const notFound = (req, res, next) => {
  try {
    res.status(404).json({
      success: false,
      message: "Route not found",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};

const errorHandler = (err, req, res, next) => {
  try {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      timestamp: new Date().toISOString(),
    });
  }
};

module.exports = { notFound, errorHandler };
