const Item = require("../database/schemas/Item");

module.exports = {
  Query: {
    items: () => Item.find(),
    item: (_, { id }) => Item.findById(id)
  },
  Mutation: {
    createItem: (_, { name }) => Item.create({ name, state: false }),
    removeItem: (_, { id }) => Item.findByIdAndDelete(id),
    buyItem: (_, { id }) => Item.findByIdAndUpdate(id, { state: true }),
    removeAllItems: () => Item.deleteMany({})
  }
};
