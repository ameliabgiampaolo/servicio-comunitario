import { Injectable } from '@angular/core';

@Injectable()
export class SchoolYearService {
    getSchoolYear() {
        return [
            {
                period: '2022-2023',
            },
            {
                period: '2021-2022',
            },
            {
                period: '2020-2021',
            },
            {
                period: '2019-2020',
            },
            {
                period: '2018-2019',
            },
            {
                period: '2017-2018',
            },
            {
                period: '2016-2017',
            },
            {
                period: '2015-2016',
            },
            {
                period: '2014-2015',
            },
            {
                period: '2013-2014',
            },
            {
                period: '2012-2013',
            },
            {
                period: '2011-2012',
            },
            {
                period: '2010-2011',
            },
            {
                period: '2009-2010',
            },
            {
                period: '2008-2009',
            },
            {
                period: '2007-2008',
            },
            {
                period: '2006-2007',
            },
            {
                period: '2005-2006',
            },
            {
                period: '2004-2005',
            },            
            {
                period: '2003-2004',
            },
            {
                period: '2002-2003',
            },
            {
                period: '2001-2002',
            },
            {
                period: '2000-2001',
            },
            {
                period: '1999-2000',
            },
            {
                period: '1998-1999',
            },
            {
                period: '1997-1998',
            },
            {
                period: '1996-1997',
            },
            {
                period: '1995-1996',
            },
            {
                period: '1994-1995',
            },
            {
                period: '1993-1994',
            },
            {
                period: '1992-1993',
            },
            {
                period: '1991-1992',
            },
            {
                period: '1990-1991',
            },
        ];
    }

    getSchoolYearData() {
        return Promise.resolve(this.getSchoolYear());
    }
};
