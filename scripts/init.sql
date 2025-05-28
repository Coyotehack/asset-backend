CREATE TABLE IF NOT EXISTS assets (
  ref_no TEXT PRIMARY KEY,
  installer_name TEXT,
  region_depot TEXT,
  road_no TEXT,
  road_name TEXT,
  road_km TEXT,
  type TEXT,
  start_lat DOUBLE PRECISION,
  start_long DOUBLE PRECISION,
  end_lat DOUBLE PRECISION,
  end_long DOUBLE PRECISION,
  unique_id TEXT
);
