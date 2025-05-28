const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const {
    refNo, installerName, regionDepot, roadNo, roadName,
    roadKm, type, gpsLat, gpsLong, endLat, endLong, uniqueId
  } = req.body;

  try {
    await db.query(
      `INSERT INTO assets (
        ref_no, installer_name, region_depot, road_no, road_name,
        road_km, type, start_lat, start_long, end_lat, end_long, unique_id
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [refNo, installerName, regionDepot, roadNo, roadName,
       roadKm, type, gpsLat, gpsLong, endLat, endLong, uniqueId]
    );
    res.status(200).json({ message: 'Asset saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save asset' });
  }
});

router.get('/:refNo', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM assets WHERE ref_no = $1', [req.params.refNo]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Asset not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching asset' });
  }
});

module.exports = router;
