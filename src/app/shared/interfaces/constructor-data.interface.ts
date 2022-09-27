import { Constructor } from "./constructor-driver.interface";

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
