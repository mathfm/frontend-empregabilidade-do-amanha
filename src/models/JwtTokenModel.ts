import { JwtDecodeOptions } from "jwt-decode";

export interface JwtTokenModel extends JwtDecodeOptions {
    id: string;
    email: string;
    type: string
}