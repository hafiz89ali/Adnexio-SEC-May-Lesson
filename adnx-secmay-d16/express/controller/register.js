import fs from "fs";
import path from "path";

function register(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  // 1st validatiopn
  // all fields are required
  // if any field is empty, return error with status code 400
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // 2nd validation
  // email must be legit email
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email",
    });
  }

  // 3rd validation
  // confirm password must be same with confirm password
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Password did not match.",
    });
  }

  // Standard convention for response data
  const resData = {
    message: "User registered successfully",
    data: {
      username,
      email,
    },
  };

  // save to file in data folder name users.json
  const usersFilePath = path.join(process.cwd(), "data", "users.json");
  const usersData = fs.readFileSync(usersFilePath, "utf-8");
  const users = JSON.parse(usersData);

  // check if user already exists
  // if user already exists, return error with status code 400
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  // add user to users array
  users.push({
    username,
    email,
    password,
  });

  // write to file
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  return res.json(resData);
}

export default register;
