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
    submitAt: Date | string;
    answeredAt?: Date | string |null;
    answererId?: number | null;
    answer?: string | null;
}

export {
    NewQuestion,
    QuestionId,
    Question,
};
