import { createSlice, configureStore } from "@reduxjs/toolkit";

import Daziymillar from "../../src/image/daziymillar.jpg"
import Jonas from "../../src/image/jonas.jpg"
import Maximilian from "../../src/image/Maximilan.jpg"


const teacherCard = createSlice({
    name: "teacher",
    initialState: {
        teacher: [
            {
                name: "Daziy Millar",
                if: 1,
                job: "Front-end Developer",
                about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolore!",
                image: Daziymillar,
            },
            {
                name: "Jonas Schmedtmann",
                if: 2,
                job: "Full-Stack Developer",
                about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolore!",
                image: Jonas,
            },
            {
                name: "Maximilian Schwarzmüller",
                if: 3,
                job: "Full-Stack Developer",
                about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolore!",
                image: Maximilian,
            },
        ],
    },

    reducers: {},
});

const store = configureStore({
    reducer: teacherCard.reducer,
});

export default store;