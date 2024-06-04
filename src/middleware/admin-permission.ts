export const adminPermission = (req, res, next) => {
  console.log(req.decoded);
  next();
};
