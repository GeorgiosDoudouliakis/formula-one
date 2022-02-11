export interface Constructor {
    constructorId: string;
    name: string;
    nationality: string;
    url: string;
}

export interface Driver {
    dateOfBirth: string;
    driverId: string;
    familyName: string;
    givenName: string;
    nationality: string;
    url: string;
    code?: string;
    permanentNumber?: string;
}

export interface DriverData {
    MRData: {
        DriverTable: {
            driverId: string;
            Drivers: Driver[];
        };
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
        xmlns: string;
    };
}