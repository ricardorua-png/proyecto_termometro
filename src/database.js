const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');

const file = path.join(__dirname, '../data/db.json');
const adapter = new JSONFile(file);


const defaultData = { registros: [] };
const db = new Low(adapter, defaultData);

async function initDB() {
  await db.read();
  if (!db.data) {
    db.data = { registros: [] };
    await db.write(); 
  }
//   await db.write();
}

module.exports = { db, initDB };