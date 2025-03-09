import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    getStudentData() {
        return [
            // Primer Año - Sección A
            { id: '1001', name: 'Pedro Jesús', surname: 'Gomez Perez', course: 'Primer Año', section: 'Sección A', username: 'pgomez' },
            { id: '1002', name: 'Lucia', surname: 'Martinez López', course: 'Primer Año', section: 'Sección A', username: 'lmartinez' },
            { id: '1003', name: 'Carlos Andrés', surname: 'Hernandez Ruiz', course: 'Primer Año', section: 'Sección A', username: 'chernandez' },
            { id: '1004', name: 'Ana', surname: 'Jimenez Torres', course: 'Primer Año', section: 'Sección A', username: 'ajimenez' },
            { id: '1005', name: 'Luis Carlos', surname: 'Sanchez Mendez', course: 'Primer Año', section: 'Sección A', username: 'lsanchez' },
            { id: '1006', name: 'Maria Andreina', surname: 'Diaz Muñoz', course: 'Primer Año', section: 'Sección A', username: 'mdiaz' },
            { id: '1007', name: 'Juan', surname: 'Ramirez Garcia', course: 'Primer Año', section: 'Sección A', username: 'jramirez' },
            { id: '1008', name: 'Elena de la Cruz', surname: 'Morales Gonzalez', course: 'Primer Año', section: 'Sección A', username: 'emorales' },
            { id: '1009', name: 'Jorge', surname: 'Vargas Reyes', course: 'Primer Año', section: 'Sección A', username: 'jvargas' },
            { id: '1010', name: 'Sofia', surname: 'Lopez Fernandez', course: 'Primer Año', section: 'Sección A', username: 'slopez' },
            { id: '1011', name: 'Raul Jesús', surname: 'Ortega Alvarez', course: 'Primer Año', section: 'Sección A', username: 'rortega' },
            { id: '1012', name: 'Patricia', surname: 'Perez Gutierrez', course: 'Primer Año', section: 'Sección A', username: 'pperez' },
            { id: '1013', name: 'Miguel de la Cruz', surname: 'Molina Rojas', course: 'Primer Año', section: 'Sección A', username: 'mmolina' },
            { id: '1014', name: 'Cristina', surname: 'Torres Nunez', course: 'Primer Año', section: 'Sección A', username: 'ctorres' },
            { id: '1015', name: 'Luis Alberto', surname: 'Medina Castillo', course: 'Primer Año', section: 'Sección A', username: 'lmedina' },
    
            // Primer Año - Sección B
            { id: '1016', name: 'Pablo', surname: 'Aguilar Soto', course: 'Primer Año', section: 'Sección B', username: 'paguilar' },
            { id: '1017', name: 'Isabel Andreina', surname: 'Reyes Jimenez', course: 'Primer Año', section: 'Sección B', username: 'ireyes' },
            { id: '1018', name: 'Javier Moises', surname: 'Navarro Vargas', course: 'Primer Año', section: 'Sección B', username: 'jnavarro' },
            { id: '1019', name: 'Sara', surname: 'Peña Delgado', course: 'Primer Año', section: 'Sección B', username: 'spena' },
            { id: '1020', name: 'Fernando', surname: 'Castillo Molina', course: 'Primer Año', section: 'Sección B', username: 'fcastillo' },
            { id: '1021', name: 'Ana Paula', surname: 'Gil Romero', course: 'Primer Año', section: 'Sección B', username: 'agil' },
            { id: '1022', name: 'Diana', surname: 'Marquez Pardo', course: 'Primer Año', section: 'Sección B', username: 'dmarquez' },
            { id: '1023', name: 'Emilio', surname: 'Soto Herrera', course: 'Primer Año', section: 'Sección B', username: 'esoto' },
            { id: '1024', name: 'Lorena', surname: 'Mora Rivas', course: 'Primer Año', section: 'Sección B', username: 'lmora' },
            { id: '1025', name: 'Gabriel', surname: 'Campos Ortega', course: 'Primer Año', section: 'Sección B', username: 'gcampos' },
            { id: '1026', name: 'Beatriz', surname: 'Espinoza Salazar', course: 'Primer Año', section: 'Sección B', username: 'bespinoza' },
            { id: '1027', name: 'Martin', surname: 'Serrano Montes', course: 'Primer Año', section: 'Sección B', username: 'mserrano' },
            { id: '1028', name: 'Laura', surname: 'Guzman Mora', course: 'Primer Año', section: 'Sección B', username: 'lguzman' },
            { id: '1029', name: 'Sergio', surname: 'Medina Aguilera', course: 'Primer Año', section: 'Sección B', username: 'smedina' },
            { id: '1030', name: 'Gloria', surname: 'Ramos Herrera', course: 'Primer Año', section: 'Sección B', username: 'gramos' },
            
            // Segundo Año - Sección A
            { id: '2001', name: 'Andrea Sofía', surname: 'Perez Silva', course: 'Segundo Año', section: 'Sección A', username: 'aperez' },
            { id: '2002', name: 'Daniel Jesús', surname: 'Torres Jimenez', course: 'Segundo Año', section: 'Sección A', username: 'dtorres' },
            { id: '2003', name: 'Camila', surname: 'Gomez Hernandez', course: 'Segundo Año', section: 'Sección A', username: 'cgomez' },
            { id: '2004', name: 'Esteban', surname: 'Flores Mendoza', course: 'Segundo Año', section: 'Sección A', username: 'eflores' },
            { id: '2005', name: 'Valentina Daniela', surname: 'Rivera Guzman', course: 'Segundo Año', section: 'Sección A', username: 'vrivera' },
            { id: '2006', name: 'Rodrigo', surname: 'Herrera Lopez', course: 'Segundo Año', section: 'Sección A', username: 'rherrera' },
            { id: '2007', name: 'Gabriela', surname: 'Romero Ruiz', course: 'Segundo Año', section: 'Sección A', username: 'gromero' },
            { id: '2008', name: 'Antonio', surname: 'Vargas Diaz', course: 'Segundo Año', section: 'Sección A', username: 'avargas' },
            { id: '2009', name: 'Natalia', surname: 'Castro Sanchez', course: 'Segundo Año', section: 'Sección A', username: 'ncastro' },
            { id: '2010', name: 'Lucas', surname: 'Martinez Fernandez', course: 'Segundo Año', section: 'Sección A', username: 'lmartinez' },
            { id: '2011', name: 'Carla Valentina', surname: 'Ortiz Pineda', course: 'Segundo Año', section: 'Sección A', username: 'cortiz' },
            { id: '2012', name: 'Emilio', surname: 'Sosa Morales', course: 'Segundo Año', section: 'Sección A', username: 'esosa' },
            { id: '2013', name: 'Fernanda del Valle', surname: 'Luna Aguilar', course: 'Segundo Año', section: 'Sección A', username: 'fluna' },
            { id: '2014', name: 'Oscar', surname: 'Reyes Vera', course: 'Segundo Año', section: 'Sección A', username: 'oreyes' },
            { id: '2015', name: 'Sofia', surname: 'Delgado Perez', course: 'Segundo Año', section: 'Sección A', username: 'sdelgado' },
            
            // Segundo Año - Sección B
            { id: '2016', name: 'Isabela Paola', surname: 'Jimenez Alvarez', course: 'Segundo Año', section: 'Sección B', username: 'ijimenez' },
            { id: '2017', name: 'Mateo', surname: 'Castillo Nunez', course: 'Segundo Año', section: 'Sección B', username: 'mcastillo' },
            { id: '2018', name: 'Victoria', surname: 'Figueroa Salinas', course: 'Segundo Año', section: 'Sección B', username: 'vfigueroa' },
            { id: '2019', name: 'Julian José', surname: 'Padilla Rosas', course: 'Segundo Año', section: 'Sección B', username: 'jpadilla' },
            { id: '2020', name: 'Ariana Gabriela', surname: 'Cruz Garcia', course: 'Segundo Año', section: 'Sección B', username: 'acruz' },
            { id: '2021', name: 'Samuel', surname: 'Mendez Ramos', course: 'Segundo Año', section: 'Sección B', username: 'smendez' },
            { id: '2022', name: 'Irene', surname: 'Montes Perez', course: 'Segundo Año', section: 'Sección B', username: 'imontes' },
            { id: '2023', name: 'Dario', surname: 'Lopez Ortega', course: 'Segundo Año', section: 'Sección B', username: 'dlopez' },
            { id: '2024', name: 'Valeria', surname: 'Gonzalez Ruiz', course: 'Segundo Año', section: 'Sección B', username: 'vgonzalez' },
            { id: '2025', name: 'Ricardo', surname: 'Marquez Herrera', course: 'Segundo Año', section: 'Sección B', username: 'rmarquez' },
            { id: '2026', name: 'Noelia Thalia', surname: 'Saenz Soto', course: 'Segundo Año', section: 'Sección B', username: 'nsaenz' },
            { id: '2027', name: 'Leonardo', surname: 'Ruiz Vargas', course: 'Segundo Año', section: 'Sección B', username: 'lruiz' },
            { id: '2028', name: 'Carolina', surname: 'Lara Gomez', course: 'Segundo Año', section: 'Sección B', username: 'clara' },
            { id: '2029', name: 'Ivan', surname: 'Pacheco Salinas', course: 'Segundo Año', section: 'Sección B', username: 'ipacheco' },
            { id: '2030', name: 'Marta', surname: 'Dominguez Delgado', course: 'Segundo Año', section: 'Sección B', username: 'mdominguez' },
            
            // Tercer Año - Sección A
            { id: '3001', name: 'Luisa', surname: 'Quintero Diaz', course: 'Tercer Año', section: 'Sección A', username: 'luisaquintero' },
            { id: '3002', name: 'Santiago Ricardo', surname: 'Moreno Jimenez', course: 'Tercer Año', section: 'Sección A', username: 'santiagomoreno' },
            { id: '3003', name: 'Raquel', surname: 'Arce Martinez', course: 'Tercer Año', section: 'Sección A', username: 'raquelarce' },
            { id: '3004', name: 'David', surname: 'Lopez Castillo', course: 'Tercer Año', section: 'Sección A', username: 'davidlopez' },
            { id: '3005', name: 'Luciana', surname: 'Velasco Ortega', course: 'Tercer Año', section: 'Sección A', username: 'lucianavelasco' },
            { id: '3006', name: 'Felipe Lucio', surname: 'Ortega Vargas', course: 'Tercer Año', section: 'Sección A', username: 'felipeortega' },
            { id: '3007', name: 'Marta', surname: 'Ramirez Montes', course: 'Tercer Año', section: 'Sección A', username: 'martaramirez' },
            { id: '3008', name: 'Miguel Angel', surname: 'Gomez Suarez', course: 'Tercer Año', section: 'Sección A', username: 'miguelgomez' },
            { id: '3009', name: 'Jimena', surname: 'Rios Morales', course: 'Tercer Año', section: 'Sección A', username: 'jimenarios' },
            { id: '3010', name: 'Alvaro', surname: 'Hernandez Cordero', course: 'Tercer Año', section: 'Sección A', username: 'alvarohernandez' },
            { id: '3011', name: 'Pilar del Carmen', surname: 'Medina Torres', course: 'Tercer Año', section: 'Sección A', username: 'pilarmedina' },
            { id: '3012', name: 'Benjamin', surname: 'Fuentes Ramos', course: 'Tercer Año', section: 'Sección A', username: 'benjaminfuentes' },
            { id: '3013', name: 'Angela', surname: 'Cardenas Pineda', course: 'Tercer Año', section: 'Sección A', username: 'angelacardenas' },
            { id: '3014', name: 'Adrian', surname: 'Rodriguez Leon', course: 'Tercer Año', section: 'Sección A', username: 'adrianrodriguez' },
            { id: '3015', name: 'Julia Lorena', surname: 'Carmona Luna', course: 'Tercer Año', section: 'Sección A', username: 'juliacarmona' },

            // Tercer Año - Sección B
            { id: '3016', name: 'Hugo Rafael', surname: 'Paredes Ruiz', course: 'Tercer Año', section: 'Sección B', username: 'hugoparedes' },
            { id: '3017', name: 'Claudia', surname: 'Vega Gonzalez', course: 'Tercer Año', section: 'Sección B', username: 'claudiavega' },
            { id: '3018', name: 'Diego Rafael', surname: 'Espinoza Marquez', course: 'Tercer Año', section: 'Sección B', username: 'diegoespinoza' },
            { id: '3019', name: 'Emma', surname: 'Padilla Castro', course: 'Tercer Año', section: 'Sección B', username: 'emmapadilla' },
            { id: '3020', name: 'Bruno Emilio', surname: 'Gonzalez Medina', course: 'Tercer Año', section: 'Sección B', username: 'brunogonzalez' },
            { id: '3021', name: 'Alicia Sofia', surname: 'Santos Herrera', course: 'Tercer Año', section: 'Sección B', username: 'aliciasantos' },
            { id: '3022', name: 'Joaquin', surname: 'Carrillo Silva', course: 'Tercer Año', section: 'Sección B', username: 'joaquincarrillo' },
            { id: '3023', name: 'Lorena Paola', surname: 'Perez Torres', course: 'Tercer Año', section: 'Sección B', username: 'lorenaperez' },
            { id: '3024', name: 'Ignacio', surname: 'Ramirez Soto', course: 'Tercer Año', section: 'Sección B', username: 'ignacioramirez' },
            { id: '3025', name: 'Veronica Andreina', surname: 'Nunez Serrano', course: 'Tercer Año', section: 'Sección B', username: 'veronicanunez' },
            { id: '3026', name: 'Estela', surname: 'Alvarez Guzman', course: 'Tercer Año', section: 'Sección B', username: 'estelaalvarez' },
            { id: '3027', name: 'Luis Andrés', surname: 'Salinas Flores', course: 'Tercer Año', section: 'Sección B', username: 'luissalinas' },
            { id: '3028', name: 'Fabiola', surname: 'Maldonado Pardo', course: 'Tercer Año', section: 'Sección B', username: 'fabiolamaldonado' },
            { id: '3029', name: 'Ruben', surname: 'Suarez Vargas', course: 'Tercer Año', section: 'Sección B', username: 'rubensuarez' },
            { id: '3030', name: 'Olivia', surname: 'Ordonez Marin', course: 'Tercer Año', section: 'Sección B', username: 'oliviaordonez' },

            // Cuarto Año - Sección A
            { id: '4001', name: 'Yicel Astrid', surname: 'Contreras Marquez', course: 'Cuarto Año', section: 'Sección A', username: 'ycontreras' },
            { id: '4002', name: 'Maria Fernanda', surname: 'Perez Ruiz', course: 'Cuarto Año', section: 'Sección A', username: 'mariaf_perez' },
            { id: '4003', name: 'Andres', surname: 'Gonzalez Herrera', course: 'Cuarto Año', section: 'Sección A', username: 'andres_gonzalez' },
            { id: '4004', name: 'Ana Isabel', surname: 'Sanchez Diaz', course: 'Cuarto Año', section: 'Sección A', username: 'ana_sanchez' },
            { id: '4005', name: 'Jose Manuel', surname: 'Martinez Ramirez', course: 'Cuarto Año', section: 'Sección A', username: 'josem_martinez' },
            { id: '4006', name: 'Elena', surname: 'Castro Ponce', course: 'Cuarto Año', section: 'Sección A', username: 'elena_castro' },
            { id: '4007', name: 'Luis Alberto', surname: 'Vega Torres', course: 'Cuarto Año', section: 'Sección A', username: 'luisvega' },
            { id: '4008', name: 'Julia Patricia', surname: 'Navarro Rivas', course: 'Cuarto Año', section: 'Sección A', username: 'juliapatricia_nav' },
            { id: '4009', name: 'Rafael', surname: 'Vargas Soto', course: 'Cuarto Año', section: 'Sección A', username: 'rafael_vargas' },
            { id: '4010', name: 'Sofia', surname: 'Ortega Mejia', course: 'Cuarto Año', section: 'Sección A', username: 'sofia_ortega' },
            { id: '4011', name: 'Fernando', surname: 'Mora Gutierrez', course: 'Cuarto Año', section: 'Sección A', username: 'fer_mora' },
            { id: '4012', name: 'Daniela', surname: 'Ruiz Padilla', course: 'Cuarto Año', section: 'Sección A', username: 'daniela_ruiz' },
            { id: '4013', name: 'Cesar Augusto', surname: 'Salazar Marin', course: 'Cuarto Año', section: 'Sección A', username: 'cesar_salazar' },
            { id: '4014', name: 'Emilia', surname: 'Rosales Sanchez', course: 'Cuarto Año', section: 'Sección A', username: 'emilia_rosales' },
            { id: '4015', name: 'Miguel Angel', surname: 'Campos Nunez', course: 'Cuarto Año', section: 'Sección A', username: 'miguel_campos' },

            // Cuarto Año - Sección B
            { id: '4016', name: 'Laura Sofia', surname: 'Jimenez Pineda', course: 'Cuarto Año', section: 'Sección B', username: 'laura_jimenez' },
            { id: '4017', name: 'Juan Pablo', surname: 'Rojas Perez', course: 'Cuarto Año', section: 'Sección B', username: 'juanpablo_rojas' },
            { id: '4018', name: 'Sara', surname: 'Aguilar Morales', course: 'Cuarto Año', section: 'Sección B', username: 'sara_aguilar' },
            { id: '4019', name: 'Diego', surname: 'Hernandez Montoya', course: 'Cuarto Año', section: 'Sección B', username: 'diego_hernandez' },
            { id: '4020', name: 'Lucia', surname: 'Mendez Robles', course: 'Cuarto Año', section: 'Sección B', username: 'lucia_mendez' },
            { id: '4021', name: 'Jorge Ivan', surname: 'Lopez Ortiz', course: 'Cuarto Año', section: 'Sección B', username: 'jorgeivan_lopez' },
            { id: '4022', name: 'Natalia', surname: 'Gutierrez Silva', course: 'Cuarto Año', section: 'Sección B', username: 'natalia_gutierrez' },
            { id: '4023', name: 'Mauricio', surname: 'Dominguez Vargas', course: 'Cuarto Año', section: 'Sección B', username: 'mauricio_dominguez' },
            { id: '4024', name: 'Paula Andrea', surname: 'Romero Garcia', course: 'Cuarto Año', section: 'Sección B', username: 'paula_romero' },
            { id: '4025', name: 'Raul', surname: 'Figueroa Pardo', course: 'Cuarto Año', section: 'Sección B', username: 'raul_figueroa' },
            { id: '4026', name: 'Andrea Carolina', surname: 'Espinoza Torres', course: 'Cuarto Año', section: 'Sección B', username: 'andrea_espinoza' },
            { id: '4027', name: 'Francisco Javier', surname: 'Luna Suarez', course: 'Cuarto Año', section: 'Sección B', username: 'francisco_luna' },
            { id: '4028', name: 'Camila', surname: 'Mora Fuentes', course: 'Cuarto Año', section: 'Sección B', username: 'camila_mora' },
            { id: '4029', name: 'Julio Cesar', surname: 'Serrano Lopez', course: 'Cuarto Año', section: 'Sección B', username: 'julio_serrano' },
            { id: '4030', name: 'Alicia Beatriz', surname: 'Ponce Ortega', course: 'Cuarto Año', section: 'Sección B', username: 'alicia_ponce' },

            // Quinto Año - Sección A
            { id: '5001', username: 'LuisFGomez', name: 'Luis Fernando', surname: 'Gomez Perez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5002', username: 'MariaJDiaz', name: 'Maria Jose', surname: 'Diaz Morales', course: 'Quinto Año', section: 'Sección A' },
            { id: '5003', username: 'CarlosEOtiz', name: 'Carlos Eduardo', surname: 'Ortiz Herrera', course: 'Quinto Año', section: 'Sección A' },
            { id: '5004', username: 'SofiaVMendez', name: 'Sofia Valentina', surname: 'Mendez Ramirez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5005', username: 'MiguelCastro', name: 'Miguel', surname: 'Castro Garcia', course: 'Quinto Año', section: 'Sección A' },
            { id: '5006', username: 'LuciaHHernandez', name: 'Lucia', surname: 'Hernandez Vargas', course: 'Quinto Año', section: 'Sección A' },
            { id: '5007', username: 'GabrielSosa', name: 'Gabriel', surname: 'Sosa Martinez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5008', username: 'ElenaPRamirez', name: 'Elena Patricia', surname: 'Ramirez Luna', course: 'Quinto Año', section: 'Sección A' },
            { id: '5009', username: 'EstebanPRios', name: 'Esteban', surname: 'Paredes Rios', course: 'Quinto Año', section: 'Sección A' },
            { id: '5010', username: 'AnaMLopez', name: 'Ana Maria', surname: 'Lopez Rojas', course: 'Quinto Año', section: 'Sección A' },
            { id: '5011', username: 'DiegoAAguilar', name: 'Diego Andres', surname: 'Aguilar Serrano', course: 'Quinto Año', section: 'Sección A' },
            { id: '5012', username: 'PaolaMora', name: 'Paola', surname: 'Mora Suarez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5013', username: 'JorgeLVega', name: 'Jorge Luis', surname: 'Vega Torres', course: 'Quinto Año', section: 'Sección A' },
            { id: '5014', username: 'CamilaMejia', name: 'Camila', surname: 'Mejia Arce', course: 'Quinto Año', section: 'Sección A' },
            { id: '5015', username: 'RaulECardenas', name: 'Raul Esteban', surname: 'Cardenas Navarro', course: 'Quinto Año', section: 'Sección A' },

            // Quinto Año - Sección B
            { id: '5016', username: 'IsabelaMendez', name: 'Isabela', surname: 'Mendez Pineda', course: 'Quinto Año', section: 'Sección B' },
            { id: '5017', username: 'SamuelLozano', name: 'Samuel', surname: 'Lozano Cruz', course: 'Quinto Año', section: 'Sección B' },
            { id: '5018', username: 'FernandoDDiaz', name: 'Fernando', surname: 'Diaz Medina', course: 'Quinto Año', section: 'Sección B' },
            { id: '5019', username: 'ValeriaAMontoya', name: 'Valeria Andrea', surname: 'Montoya Vargas', course: 'Quinto Año', section: 'Sección B' },
            { id: '5020', username: 'RobertoGutierrez', name: 'Roberto', surname: 'Gutierrez Aguilar', course: 'Quinto Año', section: 'Sección B' },
            { id: '5021', username: 'CristinaRamos', name: 'Cristina', surname: 'Ramos Castillo', course: 'Quinto Año', section: 'Sección B' },
            { id: '5022', username: 'PabloGarcía', name: 'Pablo', surname: 'Garcia Silva', course: 'Quinto Año', section: 'Sección B' },
            { id: '5023', username: 'SusanaPonce', name: 'Susana', surname: 'Ponce Soto', course: 'Quinto Año', section: 'Sección B' },
            { id: '5024', username: 'OscarREscobar', name: 'Oscar Rene', surname: 'Escobar Reyes', course: 'Quinto Año', section: 'Sección B' },
            { id: '5025', username: 'VeronicaDominguez', name: 'Veronica', surname: 'Dominguez Ramos', course: 'Quinto Año', section: 'Sección B' },
            { id: '5026', username: 'JuanCFuentes', name: 'Juan Carlos', surname: 'Fuentes Herrera', course: 'Quinto Año', section: 'Sección B' },
            { id: '5027', username: 'LauraPSaenz', name: 'Laura Patricia', surname: 'Saenz Guzman', course: 'Quinto Año', section: 'Sección B' },
            { id: '5028', username: 'EmilioVasquez', name: 'Emilio', surname: 'Vasquez Perez', course: 'Quinto Año', section: 'Sección B' },
            { id: '5029', username: 'MonicaVillanueva', name: 'Monica', surname: 'Villanueva Pardo', course: 'Quinto Año', section: 'Sección B' },
            { id: '5030', username: 'HectorJCabrera', name: 'Hector Javier', surname: 'Cabrera Flores', course: 'Quinto Año', section: 'Sección B' },
        ];
    }
    
    getProductsMini() {
        return Promise.resolve(this.getStudentData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getStudentData().slice(0, 10));
    }

    getStudent() {
        return Promise.resolve(this.getStudentData());
    }
};
