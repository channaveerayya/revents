import { INC, DEC } from "./testConstants";

export const incCounter = () => {
    return {
        type: INC
    }
};
export const decCounter = () => {
    return {
        type: DEC
    }
};
