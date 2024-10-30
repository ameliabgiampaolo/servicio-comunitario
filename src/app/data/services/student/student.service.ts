import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    getStudentData() {
        return [
            // Primer Año - Sección A
            { id: '1001', name: 'Pedro Jesús', surname: 'Gomez Perez', course: 'Primer Año', section: 'Sección A' },
            { id: '1002', name: 'Lucia', surname: 'Martinez López', course: 'Primer Año', section: 'Sección A' },
            { id: '1003', name: 'Carlos Andrés', surname: 'Hernandez Ruiz', course: 'Primer Año', section: 'Sección A' },
            { id: '1004', name: 'Ana', surname: 'Jimenez Torres', course: 'Primer Año', section: 'Sección A' },
            { id: '1005', name: 'Luis Carlos', surname: 'Sanchez Mendez', course: 'Primer Año', section: 'Sección A' },
            { id: '1006', name: 'Maria Andreina', surname: 'Diaz Muñoz', course: 'Primer Año', section: 'Sección A' },
            { id: '1007', name: 'Juan', surname: 'Ramirez Garcia', course: 'Primer Año', section: 'Sección A' },
            { id: '1008', name: 'Elena de la Cruz', surname: 'Morales Gonzalez', course: 'Primer Año', section: 'Sección A' },
            { id: '1009', name: 'Jorge', surname: 'Vargas Reyes', course: 'Primer Año', section: 'Sección A' },
            { id: '1010', name: 'Sofia', surname: 'Lopez Fernandez', course: 'Primer Año', section: 'Sección A' },
            { id: '1011', name: 'Raul Jesús', surname: 'Ortega Alvarez', course: 'Primer Año', section: 'Sección A' },
            { id: '1012', name: 'Patricia', surname: 'Perez Gutierrez', course: 'Primer Año', section: 'Sección A' },
            { id: '1013', name: 'Miguel de la Cruz', surname: 'Molina Rojas', course: 'Primer Año', section: 'Sección A' },
            { id: '1014', name: 'Cristina', surname: 'Torres Nunez', course: 'Primer Año', section: 'Sección A' },
            { id: '1015', name: 'Luis Alberto', surname: 'Medina Castillo', course: 'Primer Año', section: 'Sección A' },
    
            // Primer Año - Sección B
            { id: '1016', name: 'Pablo', surname: 'Aguilar Soto', course: 'Primer Año', section: 'Sección B' },
            { id: '1017', name: 'Isabel Andreina', surname: 'Reyes Jimenez', course: 'Primer Año', section: 'Sección B' },
            { id: '1018', name: 'Javier Moises', surname: 'Navarro Vargas', course: 'Primer Año', section: 'Sección B' },
            { id: '1019', name: 'Sara', surname: 'Peña Delgado', course: 'Primer Año', section: 'Sección B' },
            { id: '1020', name: 'Fernando', surname: 'Castillo Molina', course: 'Primer Año', section: 'Sección B' },
            { id: '1021', name: 'Ana Paula', surname: 'Gil Romero', course: 'Primer Año', section: 'Sección B' },
            { id: '1022', name: 'Diana', surname: 'Marquez Pardo', course: 'Primer Año', section: 'Sección B' },
            { id: '1023', name: 'Emilio', surname: 'Soto Herrera', course: 'Primer Año', section: 'Sección B' },
            { id: '1024', name: 'Lorena', surname: 'Mora Rivas', course: 'Primer Año', section: 'Sección B' },
            { id: '1025', name: 'Gabriel', surname: 'Campos Ortega', course: 'Primer Año', section: 'Sección B' },
            { id: '1026', name: 'Beatriz', surname: 'Espinoza Salazar', course: 'Primer Año', section: 'Sección B' },
            { id: '1027', name: 'Martin', surname: 'Serrano Montes', course: 'Primer Año', section: 'Sección B' },
            { id: '1028', name: 'Laura', surname: 'Guzman Mora', course: 'Primer Año', section: 'Sección B' },
            { id: '1029', name: 'Sergio', surname: 'Medina Aguilera', course: 'Primer Año', section: 'Sección B' },
            { id: '1030', name: 'Gloria', surname: 'Ramos Herrera', course: 'Primer Año', section: 'Sección B' },
    
            // Segundo Año - Sección A
            { id: '2001', name: 'Andrea Sofía', surname: 'Perez Silva', course: 'Segundo Año', section: 'Sección A' },
            { id: '2002', name: 'Daniel Jesús', surname: 'Torres Jimenez', course: 'Segundo Año', section: 'Sección A' },
            { id: '2003', name: 'Camila', surname: 'Gomez Hernandez', course: 'Segundo Año', section: 'Sección A' },
            { id: '2004', name: 'Esteban', surname: 'Flores Mendoza', course: 'Segundo Año', section: 'Sección A' },
            { id: '2005', name: 'Valentina Daniela', surname: 'Rivera Guzman', course: 'Segundo Año', section: 'Sección A' },
            { id: '2006', name: 'Rodrigo', surname: 'Herrera Lopez', course: 'Segundo Año', section: 'Sección A' },
            { id: '2007', name: 'Gabriela', surname: 'Romero Ruiz', course: 'Segundo Año', section: 'Sección A' },
            { id: '2008', name: 'Antonio', surname: 'Vargas Diaz', course: 'Segundo Año', section: 'Sección A' },
            { id: '2009', name: 'Natalia', surname: 'Castro Sanchez', course: 'Segundo Año', section: 'Sección A' },
            { id: '2010', name: 'Lucas', surname: 'Martinez Fernandez', course: 'Segundo Año', section: 'Sección A' },
            { id: '2011', name: 'Carla Valentina', surname: 'Ortiz Pineda', course: 'Segundo Año', section: 'Sección A' },
            { id: '2012', name: 'Emilio', surname: 'Sosa Morales', course: 'Segundo Año', section: 'Sección A' },
            { id: '2013', name: 'Fernanda del Valle', surname: 'Luna Aguilar', course: 'Segundo Año', section: 'Sección A' },
            { id: '2014', name: 'Oscar', surname: 'Reyes Vera', course: 'Segundo Año', section: 'Sección A' },
            { id: '2015', name: 'Sofia', surname: 'Delgado Perez', course: 'Segundo Año', section: 'Sección A' },

            // Segundo Año - Sección B
            { id: '2016', name: 'Isabela Paola', surname: 'Jimenez Alvarez', course: 'Segundo Año', section: 'Sección B' },
            { id: '2017', name: 'Mateo', surname: 'Castillo Nunez', course: 'Segundo Año', section: 'Sección B' },
            { id: '2018', name: 'Victoria', surname: 'Figueroa Salinas', course: 'Segundo Año', section: 'Sección B' },
            { id: '2019', name: 'Julian José', surname: 'Padilla Rosas', course: 'Segundo Año', section: 'Sección B' },
            { id: '2020', name: 'Ariana Gabriela', surname: 'Cruz Garcia', course: 'Segundo Año', section: 'Sección B' },
            { id: '2021', name: 'Samuel', surname: 'Mendez Ramos', course: 'Segundo Año', section: 'Sección B' },
            { id: '2022', name: 'Irene', surname: 'Montes Perez', course: 'Segundo Año', section: 'Sección B' },
            { id: '2023', name: 'Dario', surname: 'Lopez Ortega', course: 'Segundo Año', section: 'Sección B' },
            { id: '2024', name: 'Valeria', surname: 'Gonzalez Ruiz', course: 'Segundo Año', section: 'Sección B' },
            { id: '2025', name: 'Ricardo', surname: 'Marquez Herrera', course: 'Segundo Año', section: 'Sección B' },
            { id: '2026', name: 'Noelia Thalia', surname: 'Saenz Soto', course: 'Segundo Año', section: 'Sección B' },
            { id: '2027', name: 'Leonardo', surname: 'Ruiz Vargas', course: 'Segundo Año', section: 'Sección B' },
            { id: '2028', name: 'Carolina', surname: 'Lara Gomez', course: 'Segundo Año', section: 'Sección B' },
            { id: '2029', name: 'Ivan', surname: 'Pacheco Salinas', course: 'Segundo Año', section: 'Sección B' },
            { id: '2030', name: 'Marta', surname: 'Dominguez Delgado', course: 'Segundo Año', section: 'Sección B' },

            // Tercer Año - Sección A
            { id: '3001', name: 'Luisa', surname: 'Quintero Diaz', course: 'Tercer Año', section: 'Sección A' },
            { id: '3002', name: 'Santiago Ricardo', surname: 'Moreno Jimenez', course: 'Tercer Año', section: 'Sección A' },
            { id: '3003', name: 'Raquel', surname: 'Arce Martinez', course: 'Tercer Año', section: 'Sección A' },
            { id: '3004', name: 'David', surname: 'Lopez Castillo', course: 'Tercer Año', section: 'Sección A' },
            { id: '3005', name: 'Luciana', surname: 'Velasco Ortega', course: 'Tercer Año', section: 'Sección A' },
            { id: '3006', name: 'Felipe Lucio', surname: 'Ortega Vargas', course: 'Tercer Año', section: 'Sección A' },
            { id: '3007', name: 'Marta', surname: 'Ramirez Montes', course: 'Tercer Año', section: 'Sección A' },
            { id: '3008', name: 'Miguel Angel', surname: 'Gomez Suarez', course: 'Tercer Año', section: 'Sección A' },
            { id: '3009', name: 'Jimena', surname: 'Rios Morales', course: 'Tercer Año', section: 'Sección A' },
            { id: '3010', name: 'Alvaro', surname: 'Hernandez Cordero', course: 'Tercer Año', section: 'Sección A' },
            { id: '3011', name: 'Pilar del Carmen', surname: 'Medina Torres', course: 'Tercer Año', section: 'Sección A' },
            { id: '3012', name: 'Benjamin', surname: 'Fuentes Ramos', course: 'Tercer Año', section: 'Sección A' },
            { id: '3013', name: 'Angela', surname: 'Cardenas Pineda', course: 'Tercer Año', section: 'Sección A' },
            { id: '3014', name: 'Adrian', surname: 'Rodriguez Leon', course: 'Tercer Año', section: 'Sección A' },
            { id: '3015', name: 'Julia Lorena', surname: 'Carmona Luna', course: 'Tercer Año', section: 'Sección A' },

            // Tercer Año - Sección B
            { id: '3016', name: 'Hugo Rafael', surname: 'Paredes Ruiz', course: 'Tercer Año', section: 'Sección B' },
            { id: '3017', name: 'Claudia', surname: 'Vega Gonzalez', course: 'Tercer Año', section: 'Sección B' },
            { id: '3018', name: 'Diego Rafael', surname: 'Espinoza Marquez', course: 'Tercer Año', section: 'Sección B' },
            { id: '3019', name: 'Emma', surname: 'Padilla Castro', course: 'Tercer Año', section: 'Sección B' },
            { id: '3020', name: 'Bruno Emilio', surname: 'Gonzalez Medina', course: 'Tercer Año', section: 'Sección B' },
            { id: '3021', name: 'Alicia Sofia', surname: 'Santos Herrera', course: 'Tercer Año', section: 'Sección B' },
            { id: '3022', name: 'Joaquin', surname: 'Carrillo Silva', course: 'Tercer Año', section: 'Sección B' },
            { id: '3023', name: 'Lorena Paola', surname: 'Perez Torres', course: 'Tercer Año', section: 'Sección B' },
            { id: '3024', name: 'Ignacio', surname: 'Ramirez Soto', course: 'Tercer Año', section: 'Sección B' },
            { id: '3025', name: 'Veronica Andreina', surname: 'Nunez Serrano', course: 'Tercer Año', section: 'Sección B' },
            { id: '3026', name: 'Estela', surname: 'Alvarez Guzman', course: 'Tercer Año', section: 'Sección B' },
            { id: '3027', name: 'Luis Andrés', surname: 'Salinas Flores', course: 'Tercer Año', section: 'Sección B' },
            { id: '3028', name: 'Fabiola', surname: 'Maldonado Pardo', course: 'Tercer Año', section: 'Sección B' },
            { id: '3029', name: 'Ruben', surname: 'Suarez Vargas', course: 'Tercer Año', section: 'Sección B' },
            { id: '3030', name: 'Olivia', surname: 'Ordonez Marin', course: 'Tercer Año', section: 'Sección B' },

             // Cuarto Año - Sección A
            { id: '4001', name: 'Carlos Luis', surname: 'Mendoza Lopez', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4002', name: 'Maria Fernanda', surname: 'Perez Ruiz', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4003', name: 'Andres', surname: 'Gonzalez Herrera', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4004', name: 'Ana Isabel', surname: 'Sanchez Diaz', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4005', name: 'Jose Manuel', surname: 'Martinez Ramirez', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4006', name: 'Elena', surname: 'Castro Ponce', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4007', name: 'Luis Alberto', surname: 'Vega Torres', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4008', name: 'Julia Patricia', surname: 'Navarro Rivas', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4009', name: 'Rafael', surname: 'Vargas Soto', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4010', name: 'Sofia', surname: 'Ortega Mejia', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4011', name: 'Fernando', surname: 'Mora Gutierrez', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4012', name: 'Daniela', surname: 'Ruiz Padilla', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4013', name: 'Cesar Augusto', surname: 'Salazar Marin', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4014', name: 'Emilia', surname: 'Rosales Sanchez', course: 'Cuarto Año', section: 'Sección A' },
            { id: '4015', name: 'Miguel Angel', surname: 'Campos Nunez', course: 'Cuarto Año', section: 'Sección A' },

            // Cuarto Año - Sección B
            { id: '4016', name: 'Laura Sofia', surname: 'Jimenez Pineda', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4017', name: 'Juan Pablo', surname: 'Rojas Perez', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4018', name: 'Sara', surname: 'Aguilar Morales', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4019', name: 'Diego', surname: 'Hernandez Montoya', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4020', name: 'Lucia', surname: 'Mendez Robles', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4021', name: 'Jorge Ivan', surname: 'Lopez Ortiz', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4022', name: 'Natalia', surname: 'Gutierrez Silva', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4023', name: 'Mauricio', surname: 'Dominguez Vargas', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4024', name: 'Paula Andrea', surname: 'Romero Garcia', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4025', name: 'Raul', surname: 'Figueroa Pardo', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4026', name: 'Andrea Carolina', surname: 'Espinoza Torres', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4027', name: 'Francisco Javier', surname: 'Luna Suarez', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4028', name: 'Camila', surname: 'Mora Fuentes', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4029', name: 'Julio Cesar', surname: 'Serrano Lopez', course: 'Cuarto Año', section: 'Sección B' },
            { id: '4030', name: 'Alicia Beatriz', surname: 'Ponce Ortega', course: 'Cuarto Año', section: 'Sección B' },

            // Quinto Año - Sección A
            { id: '5001', name: 'Luis Fernando', surname: 'Gomez Perez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5002', name: 'Maria Jose', surname: 'Diaz Morales', course: 'Quinto Año', section: 'Sección A' },
            { id: '5003', name: 'Carlos Eduardo', surname: 'Ortiz Herrera', course: 'Quinto Año', section: 'Sección A' },
            { id: '5004', name: 'Sofia Valentina', surname: 'Mendez Ramirez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5005', name: 'Miguel', surname: 'Castro Garcia', course: 'Quinto Año', section: 'Sección A' },
            { id: '5006', name: 'Lucia', surname: 'Hernandez Vargas', course: 'Quinto Año', section: 'Sección A' },
            { id: '5007', name: 'Gabriel', surname: 'Sosa Martinez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5008', name: 'Elena Patricia', surname: 'Ramirez Luna', course: 'Quinto Año', section: 'Sección A' },
            { id: '5009', name: 'Esteban', surname: 'Paredes Rios', course: 'Quinto Año', section: 'Sección A' },
            { id: '5010', name: 'Ana Maria', surname: 'Lopez Rojas', course: 'Quinto Año', section: 'Sección A' },
            { id: '5011', name: 'Diego Andres', surname: 'Aguilar Serrano', course: 'Quinto Año', section: 'Sección A' },
            { id: '5012', name: 'Paola', surname: 'Mora Suarez', course: 'Quinto Año', section: 'Sección A' },
            { id: '5013', name: 'Jorge Luis', surname: 'Vega Torres', course: 'Quinto Año', section: 'Sección A' },
            { id: '5014', name: 'Camila', surname: 'Mejia Arce', course: 'Quinto Año', section: 'Sección A' },
            { id: '5015', name: 'Raul Esteban', surname: 'Cardenas Navarro', course: 'Quinto Año', section: 'Sección A' },

            // Quinto Año - Sección B
            { id: '5016', name: 'Isabela', surname: 'Mendez Pineda', course: 'Quinto Año', section: 'Sección B' },
            { id: '5017', name: 'Samuel', surname: 'Lozano Cruz', course: 'Quinto Año', section: 'Sección B' },
            { id: '5018', name: 'Fernando', surname: 'Diaz Medina', course: 'Quinto Año', section: 'Sección B' },
            { id: '5019', name: 'Valeria Andrea', surname: 'Montoya Vargas', course: 'Quinto Año', section: 'Sección B' },
            { id: '5020', name: 'Roberto', surname: 'Gutierrez Aguilar', course: 'Quinto Año', section: 'Sección B' },
            { id: '5021', name: 'Cristina', surname: 'Ramos Castillo', course: 'Quinto Año', section: 'Sección B' },
            { id: '5022', name: 'Pablo', surname: 'Garcia Silva', course: 'Quinto Año', section: 'Sección B' },
            { id: '5023', name: 'Susana', surname: 'Ponce Soto', course: 'Quinto Año', section: 'Sección B' },
            { id: '5024', name: 'Oscar Rene', surname: 'Escobar Reyes', course: 'Quinto Año', section: 'Sección B' },
            { id: '5025', name: 'Veronica', surname: 'Dominguez Ramos', course: 'Quinto Año', section: 'Sección B' },
            { id: '5026', name: 'Juan Carlos', surname: 'Fuentes Herrera', course: 'Quinto Año', section: 'Sección B' },
            { id: '5027', name: 'Laura Patricia', surname: 'Saenz Guzman', course: 'Quinto Año', section: 'Sección B' },
            { id: '5028', name: 'Emilio', surname: 'Vasquez Perez', course: 'Quinto Año', section: 'Sección B' },
            { id: '5029', name: 'Monica', surname: 'Villanueva Pardo', course: 'Quinto Año', section: 'Sección B' },
            { id: '5030', name: 'Hector Javier', surname: 'Cabrera Flores', course: 'Quinto Año', section: 'Sección B' },
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
