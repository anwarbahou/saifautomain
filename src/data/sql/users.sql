-- Create users table
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert mock users
INSERT INTO public.users (id, email, full_name, phone)
VALUES
    ('00000000-0000-0000-0000-000000000001', 'john.doe@example.com', 'John Doe', '+1234567890'),
    ('00000000-0000-0000-0000-000000000002', 'jane.smith@example.com', 'Jane Smith', '+1987654321'),
    ('00000000-0000-0000-0000-000000000003', 'bob.wilson@example.com', 'Bob Wilson', '+1122334455'),
    ('00000000-0000-0000-0000-000000000004', 'alice.johnson@example.com', 'Alice Johnson', '+1555666777'),
    ('00000000-0000-0000-0000-000000000005', 'charlie.brown@example.com', 'Charlie Brown', '+1999888777'); 