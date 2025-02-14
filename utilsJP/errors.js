export class ReadEnvError extends Error { 
    constructor (message) { 
        super(message)
        this.name = 'readEnvError'
    }
}