import { Constructor } from "../models/constructor-driver.model";

export interface ConstructorData {
    MRData: {
        ConstructorTable: {
            Constructors: Constructor[];
            season: string;
        };
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
        xmlns: string;
    }
}
