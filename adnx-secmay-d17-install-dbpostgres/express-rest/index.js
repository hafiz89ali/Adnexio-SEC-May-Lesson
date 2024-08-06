function getHealth(req, res) {
  const ip = req.ip;
  const url = req.url;
  const method = req.method;
  const log = `${method} ${url} from ${ip}`;
  console.log(log);
  const timestamp = new Date().toISOString();
  const resdata = {
    status: "ok",
    app: "express-rest",
    time: timestamp,
  };
  res.json(resData);
}

function postHealth(req, res) {
  const ip = req.ip;
  const url = req.url;
  const method = req.method;
  const log = `${method} ${url} from ${ip}`;
  console.log(log);
  const body = req.body;
  const timestamp = new Date().toISOString();
  const resdata = {
    message: `Post health request received at ${timestamp}`,
    data: body,
  };
  res.json(resData);
}

module.exports = {
  getHealth,
  postHealth,
};
