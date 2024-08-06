import database from "../../database/connection.js";

const query = `
SELECT id, title, original_Link, shortened_link, click_count FROM links
WHERE created_by = $1; 
`;

async function listLinks(req, res) {
  try {
    const createdBy = req.user.id;
    const dbRes = await database.query(query, [createdBy]);
    const links = dbRes.rows;
    const data = {
      message: "Links listed succesfully!",
      data: links,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default listLinks;
