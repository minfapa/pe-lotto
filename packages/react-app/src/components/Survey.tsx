import { AgeGroup, Gender, Parish, ISurveyResult } from "../types/SurveyTypes";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { submitUserSurvey } from "../api/SurveyPageApi";
import { useNavigate } from "react-router-dom";

interface SurveyProps {
    id: number;
}

export function Survey({ id }: SurveyProps) {
    const [result, setResult] = useState<ISurveyResult>({
        name: "",
        parish: "",
        ageGroup: "",
        gender: "",
        isElected: false,
    } as ISurveyResult);

    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
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
        } as ISurveyResult);
    };

    const handleSubmit = async () => {
        try {
            await submitUserSurvey({ ...result, id });
            setSubmitted(true);
        } catch (error) {
            console.error({ error });
        }
    };

    if (submitted) {
        return <SurveySubmitted result={result} />;
    }
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
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Stack
                spacing={2}
                direction={"row"}
                sx={{ padding: 1, height: "10vh" }}
            >
                <Button
                    variant="contained"
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                    onClick={handleSubmit}
                    disabled={
                        !result.name ||
                        !result.parish ||
                        !result.ageGroup ||
                        !result.gender
                    }
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

function SurveySubmitted({ result }: { result: ISurveyResult }) {
    return (
        <>
            <Typography
                fontSize={"x-large"}
                fontWeight={"bolder"}
                align={"center"}
            >
                {"성공적으로 제출 되었습니다!"}
            </Typography>
            <Stack
                direction={"column"}
                alignSelf={"center"}
                spacing={1}
                sx={{ padding: 3 }}
            >
                <Typography align={"left"}>{`이름: ${result.name}`}</Typography>
                <Typography
                    align={"left"}
                >{`교구: ${result.parish}`}</Typography>
                <Typography
                    align={"left"}
                >{`연령대: ${result.ageGroup}`}</Typography>
                <Typography
                    align={"left"}
                >{`성별: ${result.gender}`}</Typography>
            </Stack>
        </>
    );
}
