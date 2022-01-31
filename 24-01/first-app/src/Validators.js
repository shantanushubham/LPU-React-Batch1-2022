const EMAIL_REG_EX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail = (email) => {
  if (typeof email !== "string") {
    return false;
  }
  return EMAIL_REG_EX.test(email);
};

export const isValidUser = (user) =>
  isEmail(user.email) && user.password && user.firstName && user.lastName;
