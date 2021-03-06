import { Constructor, Driver } from "./constructor-driver.model";

export interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}

export interface DriverStandingsList {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
}

export interface StandingsTable {
    StandingsLists: DriverStandingsList[];
    season: string;
}

export interface DriverStandings {
    MRData: {
        StandingsTable: StandingsTable;
        limit: string;
        offset: string;
        total: string;
        url: string;
        xmlns: string;
    }
}