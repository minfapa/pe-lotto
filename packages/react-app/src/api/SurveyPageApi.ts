import { ISurveyResult } from "../types/SurveyTypes";

export const submitUserSurvey = async (user: ISurveyResult) => {
    return fetch("/api/lotto-user/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
};

export const getAllUsers = async (): Promise<ISurveyResult[]> => {
    const response = await fetch("/api/lotto-user/get-all");
    return response.json();
};

export const decodeHashKey = async (hash: string): Promise<number> => {
    const response = await fetch(`/api/lotto-user/decode-hash?hash=${hash}`);
    return response.json();
};

export async function getUserById(id: number): Promise<ISurveyResult> {
    const response = await fetch(`/api/lotto-user/get-user?id=${id}`);
    try {
        return await response.json();
    } catch (error) {
        return {} as ISurveyResult;
    }
}
