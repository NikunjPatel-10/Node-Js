-- Create the monsters table
CREATE TABLE IF NOT EXISTS monsters(
    id serial PRIMARY KEY,
    name character varying(255),
    personality character varying(50)
);

-- Create the habitats table
CREATE TABLE habitats(
    id serial PRIMARY KEY,
    name character varying(50),
    climate character varying(50),
    temperature integer
);

-- Create the lives table
CREATE TABLE lives(
    monster_id integer,
    habitat_id integer,
    FOREIGN KEY (monster_id) REFERENCES monsters(id),
    FOREIGN KEY (habitat_id) REFERENCES habitats(id)
);

-- Insert values into the monsters table
INSERT INTO monsters(name, personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

-- Insert values into the habitats table
INSERT INTO habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forest', 'haunted', 70),
('mountain', 'icy', 30);


INSERT INTO lives(monsters,habitats)
VALUES
('Fluffy','desert'),
('Noodles','forrest'),
('Rusty','mountain');
