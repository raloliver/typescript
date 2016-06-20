module subscription {
    export interface IStudent {
    name: string;
    email: string;
    age?: number; 
    register(): void;
    }
}