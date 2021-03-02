const knex = require('../../db');
const bcrypt = require('bcrypt');

async function getUser(id) {
  const [user] = await knex('users')
    .where('id', id)
    .select('email', 'name');
  return user;
}

async function updateUserInfo({ name, username: email, id}) {
  const [user] = await knex('users')
    .where({ id })
    .update({
      name,
      email,
      updated_at: new Date(),
    })
    .returning(['email', 'name']);
  return user;
}

async function change_password({ name, username: email, id}) {
  const [user] = await knex('users')
    .where({ id })
    .update({
      name,
      email,
      updated_at: new Date(),
    })
    .returning(['email', 'name']);
  return user;
}

module.exports = {
  getUser,
  updateUserInfo,
};
