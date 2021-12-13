class AnswerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AnswerError';
    }
}

export default AnswerError;
