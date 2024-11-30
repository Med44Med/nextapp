import "next";

declare global {

namespace NodeJS {
    interface ProcessEnv {
        SESSION_SECRET: string;
        MONGO_URL: string;
    }
}}