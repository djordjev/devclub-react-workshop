const db = require("./db");

let id = 0;

const resolvers = {
  Query: {
    allMembers() {
      return db;
    },
  },
  Mutation: {
    addMember(_, args) {
      const { name, position } = args;
      const newMember = {
        id: id++,
        name,
        position,
      };

      db.push(newMember);

      return newMember;
    },
    updateMember(_, args) {
      const { id, name, position } = args;
      const member = db.find((m) => m.id === id);

      if (!member) {
        throw new Error("no member with id" + id);
      }

      member.name = name;
      member.position = position;

      return member;
    },
    deleteMember(_, args) {
      const { id } = args;

      const memberIndex = db.findIndex((m) => m.id === id);

      if (memberIndex === -1) {
        throw new Error("no member with id" + id);
      }

      const member = db[memberIndex];
      db.splice(memberIndex, 1);

      return member;
    },
  },
};

module.exports = resolvers;
