export interface Driver{
    database: string;
    pass: string;
    port: number;
    connect(): void;
    isConnected(name: string) : boolean;
}

export class PostgresDriver implements Driver{
    constructor(public database: string, public pass: string, public port: number){}
    isConnected(name: string): boolean {
        return true;
    }
    connect(): void {
        
    }
}

export class OracleDriver implements Driver{
    constructor(public database: string, public pass: string, public port: number){}
    isConnected(name: string): boolean {
        return true;
    }
    connect(): void {
        
    }
}