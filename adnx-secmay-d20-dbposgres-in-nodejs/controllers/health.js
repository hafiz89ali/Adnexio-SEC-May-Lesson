function getHealth(req, res) {
  const data = {
    status: "OK",
    message: "Get health check passed",
  };
  return res.status(200).json(data);
}

function postHealth(req, res) {
  const body = req.body;
  const data = {
    status: "OK",
    message: "Post health check passed",
    body: body,
  };
  return res.status(200).json(data);
}

const healthController = {
  getHealth, // similar as getHealth:getHealth
  postHealth, // similar as postHealth:postHealth
};

export default healthController;
