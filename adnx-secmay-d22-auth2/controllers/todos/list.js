import database from "../../database/connection.js";

const query = `
SELECT todos.id,todos.name, todos.is_completed, users.email FROM todos
JOIN users ON todos.created_by = users.id
WHERE created_by = $1;
`;

async function listTodos(req, res) {
  try {
    const createdBy = req.user.id;
    const dbRes = await database.query(query, [createdBy]);
    const todos = dbRes.rows;
    const data = {
      message: "Todos listed successfully!",
      data: todos,
    };
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default listTodos;
