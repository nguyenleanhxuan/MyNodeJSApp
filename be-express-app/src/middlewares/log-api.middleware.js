export const logApiMiddleware = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip;
  const messLogApi = `${new Date().toLocaleString()} \t ${method} \t ${url} \t ${ip}`;
  console.log(messLogApi);
  next();
};
