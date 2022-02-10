import { Constructor } from "./constructor-driver.model";

export interface ConstructorStanding {
    Constructor: Constructor;
    points: string;
    position: string;
    positionText: string;
    wins: string;
}

export interface ConstructorStandingsList {
    ConstructorStandings: ConstructorStanding[];
    round: string;
    season: string;
}

export interface StandingsTable {
    season: string;
    StandingsList: ConstructorStandingsList[];
}

export interface ConstructorStandings {
    MRData: {
        StandingsTable: StandingsTable;
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
        xmlns: string;
    }
}