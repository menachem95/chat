import { createError } from "../utils/error.js";

import Group from "../models/Group.js";

export const createGroup = async (req, res, next) => {
  const { groupDisplayName, users } = await req.body;
  try {
    const newGroup = await Group.create({
      groupDisplayName,
      users,
      name: `${users.sort()[0]}:${users.sort()[1]}`,
    });
    
    req.io.on('connection',)
    res.json(newGroup);
  } catch (error) {
    throw Error(error);
  }
};
