export const errorHandler = (res, error) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong" || error.message,
  });
};
