const createUser = (name, email, password, description, isAdmin) => {
  const newDate = new Date();

  const newUser = {
    name,
    email,
    password,
    description,
    isAdmin,
    dateCreated: newDate.toDateString(),
  };

  return newUser;
};

createUser("Francis", "bob@bob.com", "1234", "I dunno", true);

createUser(undefined, "bob2@bob2.com", undefined, undefined, true);

const betterCreateUser = (userInfo) => {
  const newDate = new Date();

  const newUser = { ...userInfo, dateCreated: newDate.toDateString() };

  return newUser;
};

betterCreateUser({
  name: "Francis",
  email: "bob@bob.com",
  password: "1234",
  description: "hmmm",
  isAdmin: true,
});

betterCreateUser({
  isAdmin: false,
  email: "bob2@bob2.com",
});
