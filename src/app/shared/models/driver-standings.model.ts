import { Constructor, Driver } from "./constructor-driver.model";

export interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}

export interface StandingsList {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
}

export interface StandingsTable {
    StandingsLists: StandingsList[];
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