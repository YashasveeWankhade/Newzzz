
const oracledb = require("oracledb");
const dbConfig = require("../config/db");

async function fetchNewsFromDB(req, res) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute("SELECT * FROM NEWS_ARTICLES");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news from Oracle DB");
  } finally {
    if (connection) await connection.close();
  }
}

module.exports = { fetchNewsFromDB };
