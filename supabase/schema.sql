-- Core Business Segments: MSMEs, Artisans, SHGs [cite: 18-22]
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  full_name TEXT,
  business_name TEXT,
  business_type TEXT CHECK (business_type IN ('msme', 'artisan', 'shg', 'startup')),
  sector TEXT,
  state TEXT,
  documentation_status TEXT DEFAULT 'incomplete'
);

-- Repository of Government Schemes [cite: 144]
CREATE TABLE schemes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  min_funding NUMERIC,
  max_funding NUMERIC,
  eligibility_tags TEXT[],
  sector TEXT,
  success_rate INT DEFAULT 75
);

-- Insert Demo Data based on PMEGP and MUDRA [cite: 169, 187]
INSERT INTO schemes (name, description, max_funding, sector, eligibility_tags) VALUES 
('PMEGP Scheme', 'Prime Minister Employment Generation Programme for rural/urban enterprises.', 2500000, 'Manufacturing', '{"msme", "artisan"}'),
('MUDRA Loan', 'Micro-loans providing collateral-free credit for small business scaling.', 1000000, 'Services', '{"msme", "startup"}');