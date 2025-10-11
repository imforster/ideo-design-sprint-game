-- IDEO Design Sprint Game - Supabase Database Setup
-- Run this SQL in your Supabase SQL Editor

-- Create sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  host_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create session_data table
CREATE TABLE IF NOT EXISTS session_data (
  session_id UUID PRIMARY KEY REFERENCES sessions(id) ON DELETE CASCADE,
  data JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_session_data_session_id ON session_data(session_id);

-- Enable Row Level Security (RLS)
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_data ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust based on your security needs)
CREATE POLICY "Allow public read access to sessions" 
  ON sessions FOR SELECT 
  USING (true);

CREATE POLICY "Allow public insert to sessions" 
  ON sessions FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public read access to session_data" 
  ON session_data FOR SELECT 
  USING (true);

CREATE POLICY "Allow public insert to session_data" 
  ON session_data FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public update to session_data" 
  ON session_data FOR UPDATE 
  USING (true);

-- Enable real-time for session_data table
ALTER PUBLICATION supabase_realtime ADD TABLE session_data;

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at on session_data changes
CREATE TRIGGER update_session_data_updated_at
  BEFORE UPDATE ON session_data
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create function to clean up old sessions (older than 24 hours)
CREATE OR REPLACE FUNCTION cleanup_old_sessions()
RETURNS void AS $$
BEGIN
  DELETE FROM sessions 
  WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql;

-- Optional: Schedule cleanup (requires pg_cron extension)
-- SELECT cron.schedule('cleanup-old-sessions', '0 * * * *', 'SELECT cleanup_old_sessions()');
