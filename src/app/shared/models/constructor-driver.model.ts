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