export const validateFirstName = firstName => {
  if (!firstName) {
    return false;
  }

  const firstLetter = firstName.charAt (0);
  if (firstLetter !== firstLetter.toUpperCase ()) {
    return false;
  }

  return true;
};

export const validateLastName = lastName => {
  if (!lastName) {
    return false;
  }

  const firstLetter = lastName.charAt (0);
  if (firstLetter !== firstLetter.toUpperCase ()) {
    return false;
  }

  return true;
};

export const validateEmail = email => {
  return String (email)
    .toLowerCase ()
    .match (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = password => {
  
  if (String (password).trim ().length < 8) {
    return false;
  }
  
  if (!/[A-Z]/.test (password)) {
    return false;
  }
  
  if (!/[^A-Za-z0-9]/.test (password)) {
    return false;
  }
  
  return true;
};
