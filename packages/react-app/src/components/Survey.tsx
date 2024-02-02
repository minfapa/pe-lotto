import { AgeGroup, Gender, Parish } from "../types/SurveyTypes";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { useState } from "react";

export interface SurveyResult {
    name: string;
    parish: Parish | "";
    ageGroup: AgeGroup | "";
    gender: Gender | "";
}

export function Survey() {
    const [result, setResult] = useState<SurveyResult>({
        name: "",
        parish: "",
        ageGroup: "",
        gender: "",
    } as SurveyResult);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name as keyof typeof result;
        const value = event.target.value;

        setResult({
            ...result,
            [name]: value,
        });
    };
    const handleChange = (event: SelectChangeEvent) => {
        const name = event.target.name as keyof typeof result;
        const value = event.target.value;

        setResult({
            ...result,
            [name]: value,
        });
    };

    const handleClear = () => {
        setResult({
            name: "",
            parish: "",
            ageGroup: "",
            gender: "",
        } as SurveyResult);
    };

    return (
        <Stack spacing={2} direction={"column"}>
            <TextField
                name="name"
                label="이름"
                onChange={handleInput}
                value={result.name || ""}
            />
            <FormControl>
                <InputLabel id={"parish"}>{"교구"}</InputLabel>
                <Select
                    name={"parish"}
                    labelId={"parish"}
                    label={"교구"}
                    onChange={handleChange}
                    value={result.parish || ""}
                >
                    {Object.values(Parish).map((parish) => (
                        <MenuItem key={parish} value={parish}>
                            {parish}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id={"ageGroup"}>{"연령대"}</InputLabel>
                <Select
                    name={"ageGroup"}
                    labelId={"ageGroup"}
                    onChange={handleChange}
                    label={"연령대"}
                    value={result.ageGroup || ""}
                >
                    {Object.values(AgeGroup).map((ageGroup) => (
                        <MenuItem key={ageGroup} value={ageGroup}>
                            {ageGroup}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id={"gender"}>{"성별"}</InputLabel>
                <Select
                    name={"gender"}
                    labelId={"gender"}
                    onChange={handleChange}
                    label={"성별"}
                    value={result.gender || ""}
                >
                    {Object.values(Gender).map((gender) => (
                        <MenuItem key={gender} value={gender}>
                            {gender}
                        </MenuItem>))}
                </Select>
            </FormControl>
            <Stack spacing={2} direction={"row"} sx={{ padding: 1, height: "10vh" }}>
                <Button
                    variant="contained"
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {"제출 하기"}
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                    onClick={handleClear}
                >
                    {"지우고 다시 하기"}
                </Button>
            </Stack>
        </Stack>
    );
}
