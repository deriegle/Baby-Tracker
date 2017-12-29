export interface Feeding {
    id?: string;
    date?: string;
    feeding?: {
        time?: string;
        bmAmount?: number;
        fAmount?: number;
        parent?: string;
        pee?: boolean;
        poop?: boolean;
    };
}