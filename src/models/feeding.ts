export interface Feeding {
    id?: string;
    date?: string;
    feedings?: [
        {
            time?: string;
            bmAmount?: number;
            fAmount?: number;
            parent?: string;
            pee?: boolean;
            poop?: boolean;
        }
    ];
}