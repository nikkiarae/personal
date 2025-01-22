"use client";

import { FC } from "react";
import { Page } from "@/components/layout";
import { Stack } from "@mui/material";
import { Intro, Strengths } from "@/components/sections";


const Home: FC = () => {
  return (
    <Page>
        <Stack spacing={6}>
            <Intro />
            <Strengths />
        </Stack>
    </Page>
  );
}

export default Home