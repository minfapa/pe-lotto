import { Survey } from "../components/Survey";
import { CircularProgress, Stack, Typography } from "@mui/material";
import logo from "../assets/ci_logo.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function SurveyPage() {
    const [lottoNumber, setLottoNumber] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    useEffect(() => {
        setLoading(true);
        const queryParams = new URLSearchParams(location.search);
        const number = queryParams.get("number");
        if (number) {
            setLottoNumber(parseInt(number));
        } else {
            setLottoNumber(null);
        }
        setLoading(false);
    }, [location.search]);


    return (
        <>
            {loading && <CircularProgress />}
            {!loading && !lottoNumber && (
                <Stack direction={"column"} spacing={1} sx={{ padding: 3 }}>
                    <img src={logo} alt={"logo"}
                         style={{ maxWidth: "100%", height: "auto" }} />
                    <Typography fontSize={"x-large"} fontWeight={"bolder"} align={"center"}>
                        {"잘못된 번호 입니다. 관리자에게 문의하세요."}
                    </Typography>
                </Stack>)
            }
            {!loading && lottoNumber && (
                <Stack direction={"column"} spacing={1} sx={{ padding: 3 }}>
                    <img src={logo} alt={"logo"}
                         style={{ maxWidth: "100%", height: "auto" }} />
                    <Typography fontSize={"x-large"} fontWeight={"bolder"} align={"center"}>
                        {`체육대회 행운권: ${lottoNumber}번`}
                    </Typography>
                    <Survey />
                </Stack>
            )}
        </>
    );
}
