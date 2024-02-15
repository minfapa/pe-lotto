export enum Parish {
    parish1 = "1 교구",
    parish2 = "2 교구",
    parish3 = "3 교구",
    parish4 = "4 교구",
    parish5 = "5 교구",
    parish6 = "6 교구",
    parish7 = "7 교구",
    parish8 = "8 교구",
    youth = "청장년",
    visitor = "미등록",
}

export enum AgeGroup {
    under10 = "10세 미만",
    tenTo19 = "10대",
    twentyTo29 = "20대",
    thirtyTo39 = "30대",
    fortyTo49 = "40대",
    fiftyTo59 = "50대",
    sixtyTo69 = "60대",
    seventyTo79 = "70대",
    eightyTo89 = "80대",
    over90 = "90대 이상",
}

export enum Gender {
    male = "남성",
    female = "여성",
    notResponse = "응답 없음",
}

export interface ISurveyResult {
    id: number;
    name: string;
    parish: Parish | "";
    ageGroup: AgeGroup | "";
    gender: Gender | "";
    isElected: boolean;
}
