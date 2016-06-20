/// <reference path="ISubscriber.ts" />
/// <reference path="IStudent.ts" />

module subscription {
    // implementação de múltiplas interfaces
    export class Student implements IStudent, ISubscriber {
        constructor(
            public name: string, 
            public email: string, 
            public isSubscriber,
            public age?: number            
        ){ 
    }

    register(): void {
            console.log('Estudante matrículado.')
        }
    }
}