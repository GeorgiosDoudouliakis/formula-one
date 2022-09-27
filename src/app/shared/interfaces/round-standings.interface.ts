import { Constructor, Driver } from "@shared/interfaces/constructor-driver.interface";

export interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface Circuit {
    Location: Location;
    circuitId: string;
    circuitName: string;
    url: string;
}

export interface FastestLap {
    AverageSpeed: {
        units: string;
        speed: string;
    };
    Time: {
        time: string;
    };
    lap: string;
    rank: string;
}

export interface Result {
    Constructor: Constructor;
    Driver: Driver;
    FastestLap: FastestLap;
    Time: {
        millis: string;
        time: string;
    };
    grid: string;
    laps: string;
    number: string;
    points: string;
    position: string;
    positionText: string;
    status: string;
}

export interface Race {
    Circuit: Circuit;
    Results: Result[];
    date: string;
    raceName: string;
    round: string;
    season: string;
    time: string;
    url: string;
}

export interface RaceTable {
    Races: Race[];
    season: string;
}

export interface RoundStandings {
    MRData: {
        RaceTable: RaceTable;
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
        xmlns: string;
    }
}
