import { ReactNode } from "react";

export const URL = "https://trackier.u9ilnk.me/d/vqLDNPH12A";
export const WEB_URL = "https://trackier.github.io/unilink-simulator/";

export interface IOptionList {
    key?: string;
    label?: string;
    value?: string;
    content?: ReactNode;
    icon?:ReactNode |  Record<string, string>
    data?:unknown;
    [key: string]: string | ReactNode | boolean | Record<string, string> | unknown;
  }

export const PRODUCT_OPTIONS: IOptionList[] = [
    { value: "blueberry", label: "Blueberry" },
    { value: "chocochip", label: "Chocochip" },
    { value: "vanilla", label: "Vanilla" }
];
// TODO: Webpage change to url
export const ANDROID_OPTIONS: IOptionList[] = [
    { label: "Web Page", value: WEB_URL },
    { label: "Play Store", value: "Play Store" }
];
// TODO: Webpage change to url
export const IOS_OPTIONS: IOptionList[] = [
    { label: "Web Page", value: WEB_URL },
    { label: "App Store", value: "App Store" }
];
// TODO: Webpage change to url
export const DESKTOP_OPTIONS: IOptionList[] = [{ label: "Web Page", value: WEB_URL }];
export const QUANTITY_OPTIONS: IOptionList[] = [
    { label: "1", value: "1" },
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "99", value: "99" }
];