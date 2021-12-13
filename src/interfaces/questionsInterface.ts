interface NewQuestion {
    question: string;
    student: string;
    className: string;
    tags: string;
}

interface QuestionId {
    id: number;
}

interface Question {
    id?: number;
    question: string;
    student: string;
    className: string;
    tags?: string;
    answered: boolean;
    submitAt: Date | string;
    answeredAt?: Date | string |null;
    answererId?: number | null;
    answer?: string | null;
}

interface NewAnswer {
    questionId: number;
    answer: string;
    userId: number;
}

export {
    NewQuestion,
    QuestionId,
    Question,
    NewAnswer,
};
