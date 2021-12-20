exports.mongooseErrorHandler = async (err) => {
  let errors = {};
  if (err.message.includes("vendor validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  if (err.message.includes("booking validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  if (err.message.includes("vendor validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  return errors;
};
