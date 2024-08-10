import database from "../../database/connection.js";

const query = `
DELETE FROM links WHERE id = $1 AND created_by = $2
`;

async function deleteLink(req, res) {
  try {
    const linkId = req.params.id;
    const userId = req.user.id;
    const dbRes = await database.query(query, [linkId, userId]);
    if (dbRes.rowCount === 0) {
      return res.status(404).json({ error: "Link not found" });
    }
    const data = {
      message: `Link deleted id ${linkId} successfully`,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default deleteLink;
