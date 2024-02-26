import { ChangeEvent } from "react";

export interface Iheader {
    title?: string;
    subtitle?: string;
    name?: string;
    value?: string;
    message?: string;
    onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onclick?: () => void;
}