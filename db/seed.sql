-- add default data
INSERT INTO mock_crm_department (name)
VALUES 
('one'),
('cooking'),
('mysteries'),
('artifacts');

INSERT INTO mock_crm_employees (first_name, last_name, manager_id)
VALUES
('one', 'onetwo', 22),
('two', 'twotwo', 21),
('three', 'threetwo', 15),
('four', 'fourtwo', 67),

INSERT INTO mock_crm_role (title, salary)
VALUES
('role1', 1312312),
('role2', 3412),
('role5', 13),
('role9', 4);