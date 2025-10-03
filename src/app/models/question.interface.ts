export interface IQuestion {
    id: number;
    question: string;
    icon: string;
    answers: IAnswer[];
}

export interface IAnswer {
    id?: number;
    title?: string;
    isCorrect?: boolean;
    img?: string;
    isSelected?: boolean;
    text?: string;
    value?: number;
}