import { v4 as uuidv4 } from "uuid";

// MOCK DATA array for users using 'user.json' schema
// TODO: attach to database, mongo, sql, ect.
let users = [];


// ------- CREATE NEW USER
const createUser = (req, res) => {
  // push request to users array
  const user = req.body;

  // create unique uuid for users
  /*  const userId = uuidv4();
   *   const userWithAddedId = { ...user, id: uuidv4() };
   *   users.push(userWithAddedId);
   */
  // NOTE: simplified from above
  users.push({ ...user, id: uuidv4() });

  res.send(`user: ${user.firstName} added to database`);
};


// ------- GET USER DATA
const getUser = (req, res) => {
  const { id } = req.params;
  // search for user under specified id
  const userFound = users.find((user) => user.id === id);

  res.send(userFound);
};


// ------- PATCH USER DATA
const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstName) userToBeUpdated.firstName = firstName;
  if (lastName) userToBeUpdated.lastName = lastName;
  if (age) userToBeUpdated.age = age;

  res.send(`Updates to user with id: ${id}, successful`);
};


// ------- DELETE USER
const deleteUser = (req, res) => {
  const { id } = req.params;

  // adds filter to keep other user data safe from deletion.
  // Only specified id will be modified
  users = users.filter((user) => user.id !== id);

  res.send(`User with id: ${id} has been removed from the database.`);
};

export { createUser, getUser, updateUser, deleteUser, users };
