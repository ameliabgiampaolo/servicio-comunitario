import { Injectable } from '@angular/core';
    
@Injectable()
export class UsersService {
    getUsersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Elena Rodríguez',
                category: 'Docente',
                status: 'ACTIVO',
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Pedro García',
                category: 'Docente',
                status: 'BLOQUEADO',
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Mario Méndez',
                category: 'Docente',
                status: 'INACTIVO',
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Sofía Cordobéz',
                category: 'Almuno',
                status: 'ACTIVO',
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Stephanie Zambrano',
                category: 'Docente',
                status: 'ACTIVO',
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Danielle López',
                category: 'Docente',
                status: 'BLOQUEADO',
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Elliot Page',
                category: 'Docente',
                status: 'INACTIVO',
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Denise Hernández',
                category: 'Docente',
                status: 'ACTIVO',
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Federico Lorca',
                category: 'Docente',
                status: 'INACTIVO',
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Luka Modrić',
                category: 'Docente',
                status: 'ACTIVO',
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Celia Cruz',
                category: 'Docente',
                status: 'BLOQUEADO',
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Carlos Martínez',
                category: 'Docente',
                status: 'ACTIVO'
            },
            {
                id: '1012',
                code: '250vm23cc',
                name: 'Laura Rodríguez',
                category: 'Almuno',
                status: 'ACTIVO'
            },
            {
                id: '1013',
                code: 'fldsmn31b',
                name: 'Jorge Pérez',
                category: 'Almuno',
                status: 'BLOQUEADO'
            },
            {
                id: '1014',
                code: 'waas1x2as',
                name: 'Ana García',
                category: 'Docente',
                status: 'INACTIVO'
            },
            {
                id: '1015',
                code: 'vb34btbg5',
                name: 'Luis Fernández',
                category: 'Almuno',
                status: 'ACTIVO'
            },
            {
                id: '1016',
                code: 'k8l6j58jl',
                name: 'Elena Sánchez',
                category: 'Docente',
                status: 'ACTIVO'
            },
            {
                id: '1017',
                code: 'v435nn85n',
                name: 'David Ramírez',
                category: 'Almuno',
                status: 'ACTIVO'
            },
            {
                id: '1018',
                code: '09zx9c0zc',
                name: 'María López',
                category: 'Docente',
                status: 'ACTIVO'
            },
            {
                id: '1019',
                code: 'mnb5mb2m5',
                name: 'Pedro Gómez',
                category: 'Docente',
                status: 'ACTIVO'
            },
            {
                id: '1020',
                code: 'r23fwf2w3',
                name: 'Sofía Díaz',
                category: 'Docente',
                status: 'BLOQUEADO'
            },
            {
                id: '1021',
                code: 'pxpzczo23',
                name: 'Fernando Ruiz',
                category: 'Docente',
                status: 'INACTIVO'
            },
            {
                id: '1022',
                code: '2c42cb5cb',
                name: 'Isabel Herrera',
                category: 'Docente',
                status: 'ACTIVO'
            },
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Santiago Morales',
                category: 'Almuno',
                status: 'INACTIVO'
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Lucía Jiménez',
                category: 'Almuno',
                status: 'ACTIVO'
            },
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'Mateo Ortiz',
                category: 'Almuno',
                status: 'ACTIVO'
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Daniela Silva',
                category: 'Almuno',
                status: 'INACTIVO'
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Álvaro Castillo',
                category: 'Docente',
                status: 'ACTIVO'
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Eva Reyes',
                category: 'Docente',
                status: 'ACTIVO'
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Adriana Rojas',
                category: 'Docente',
                status: 'ACTIVO'
            }            
        ];
    }


    getProductsMini() {
        return Promise.resolve(this.getUsersData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getUsersData().slice(0, 10));
    }

    getUsers() {
        return Promise.resolve(this.getUsersData());
    }
};