import { Survey } from "../components/Survey";
import { CircularProgress, Stack, Typography } from "@mui/material";
import logo from "../assets/ci_logo.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { decodeHashKey, getUserById } from "../api/SurveyPageApi";
import { ISurveyResult } from "../types/SurveyTypes";

export function SurveyPage() {
    const [lottoNumber, setLottoNumber] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [result, setResult] = useState<ISurveyResult | null>(null);

    const location = useLocation();

    useEffect(() => {
        const checkSubmitted = async (key: string) => {
            const lottoNum = await decodeHashKey(key);
            setLottoNumber(lottoNum);
            const row = await getUserById(lottoNum);
            if (row.id) {
                setResult(row);
                return setSubmitted(true);
            }
            return setSubmitted(false);
        };
        setLoading(true);
        const queryParams = new URLSearchParams(location.search);
        const key = queryParams.get("key");
        if (key) {
            void checkSubmitted(key);
        } else {
            setLottoNumber(null);
        }
        setLoading(false);
    }, [location.search]);

    return (
        <>
            {loading && <CircularProgress />}
            {!loading && submitted && (
                <Stack direction={"column"} spacing={1} sx={{ padding: 3 }}>
                    <img
                        src={logo}
                        alt={"logo"}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <Typography
                        fontSize={"x-large"}
                        fontWeight={"bolder"}
                        align={"center"}
                    >
                        {"이미 응모 한 번호입니다."}
                    </Typography>
                    <Typography
                        fontSize={"large"}
                        fontWeight={"bolder"}
                        alignSelf={"center"}
                        style={{ whiteSpace: "break-spaces" }}
                    >
                        {`행운권 번호: ${lottoNumber}\n이름: ${result?.name}\n교구: ${result?.parish}\n연령대: ${result?.ageGroup}\n성별: ${result?.gender}\n수정이 필요하면 관리자에게 문의하세요.`}
                    </Typography>
                </Stack>
            )}
            {!loading && !lottoNumber && (
                <Stack direction={"column"} spacing={1} sx={{ padding: 3 }}>
                    <img
                        src={logo}
                        alt={"logo"}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <Typography
                        fontSize={"x-large"}
                        fontWeight={"bolder"}
                        align={"center"}
                        style={{ whiteSpace: "break-spaces" }}
                    >
                        {"잘못된 접근입니다.\n관리자에게 문의하세요."}
                    </Typography>
                </Stack>
            )}
            {!loading && lottoNumber && !submitted && (
                <Stack direction={"column"} spacing={1} sx={{ padding: 3 }}>
                    <img
                        src={logo}
                        alt={"logo"}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <Typography
                        fontSize={"x-large"}
                        fontWeight={"bolder"}
                        align={"center"}
                    >
                        {`체육대회 행운권: ${lottoNumber}번`}
                    </Typography>
                    <Survey id={lottoNumber} />
                </Stack>
            )}
        </>
    );
}
