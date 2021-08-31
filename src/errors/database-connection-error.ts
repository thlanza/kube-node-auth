import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {

    statusCode = 500;
    reason = 'Erro conectando ao banco de dados';

    constructor() {
        super('Erro conectando ao banco de dados');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ]
    }
}