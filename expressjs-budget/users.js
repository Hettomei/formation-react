function buildUser(body = {}) {
  if (!body.firstName || !body.lastName) {
    return undefined;
  }

  const { firstName, lastName } = body;

  return {
    id: Date.now(),
    firstName,
    lastName,
  };
}

module.exports = {
  buildUser,
};
