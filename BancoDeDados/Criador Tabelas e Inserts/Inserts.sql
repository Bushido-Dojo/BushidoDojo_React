-- Inserir dados do Professor 1 (Rafael Moreira Silva Costa)
INSERT INTO Karate.Professor (Id_Prof, Nome)
VALUES (1, 'Rafael Moreira Silva Costa');

-- Inserir horários para o Professor 1 (Rafael Moreira Silva Costa)
INSERT INTO Karate.HorariosAula (Id_Prof, DiaSemana, HorarioInicio)
VALUES (1, 1, '11:00:00'), -- Segunda-feira às 11:00
       (1, 1, '18:00:00'), -- Segunda-feira às 18:00
       (1, 3, '11:00:00'), -- Quarta-feira às 11:00
       (1, 3, '18:00:00'); -- Quarta-feira às 18:00

-- Inserir dados do Professor 2 (Roger Otávio Nemo)
INSERT INTO Karate.Professor (Id_Prof, Nome)
VALUES (2, 'Roger Otávio Nemo');

-- Inserir horários para o Professor 2 (Roger Otávio Nemo)
INSERT INTO Karate.HorariosAula (Id_Prof, DiaSemana, HorarioInicio)
VALUES (2, 2, '11:00:00'), -- Terça-feira às 11:00
       (2, 2, '18:00:00'), -- Terça-feira às 18:00
       (2, 4, '11:00:00'), -- Quinta-feira às 11:00
       (2, 4, '18:00:00'), -- Quinta-feira às 18:00
       (2, 5, '11:00:00'), -- Sexta-feira às 11:00
       (2, 5, '18:00:00'); -- Sexta-feira às 18:00




--Inserts Faixas.

INSERT INTO Karate.Faixa (Id_Faixa,Cor)
VALUES (0,'Branca'), 
       (1,'Amarela'), 
       (2,'Laranja'), 
       (3,'Verde'), 
       (4,'Azul'), 
       (5,'Roxa'), 
       (6,'Marrom'), 
       (7,'Preta');

-- Inserts ProfFaixa
INSERT INTO karate.ProfessorFaixa(Id_Prof, Id_Faixa)
VALUES(1,0),(1,1),(1,2),(1,3),(2,4),(2,5),(2,6),(2,7)