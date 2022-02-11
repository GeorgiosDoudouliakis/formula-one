import { Constructor } from "@shared/models/constructor-driver.model";

export interface ConstructorData {
    MRData: {
        ConstructorsTable: {
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