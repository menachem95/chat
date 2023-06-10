export const login = async (req, res, next) => {
  try {
    // const { userName, password } = await req.body;
    // console.log(userName, password);
    const user = await req.body
    console.log(user)
    res.json(user)
  } catch (error) {
    throw Error(error);
  }
};
