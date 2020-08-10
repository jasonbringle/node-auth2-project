module.exports = {
    isValid,
  };
  
  function isValid(user) {
    return Boolean(user.user && user.password && typeof user.password === "string");
  }