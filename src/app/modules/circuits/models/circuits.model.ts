export interface Location {
    country: string;
    lat: string;
    locality: string;
    long: string;
}

export interface Circuit {
    Location: Location;
    circuitId: string;
    circuitName: string;
    url: string;
}

export interface CircuitTable {
    Circuits: Circuit[];
    season: string;
}

export interface CircuitData {
    MRData: {
        CircuitTable: CircuitTable;
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
        xmlns: string;
    }
}