import { QueryObject, parseUrl } from "./utils/utils";
// ** Utils
import { URL as UNILINK_URL, WEB_URL } from "./utils/constants";

/* eslint-disable camelcase */
import { useForm } from "react-hook-form";

const defaultValues: {[key:string]: string} = {
    product  : "blueberry",
    quantity : "1",
    android_r: WEB_URL,
    ios_r    : WEB_URL,
    web_r    : WEB_URL,
    link     : ""
};
const useUnilinkSimulator = () => {

    /* This is the useForm hook from react-hook-form. It is used to create a form. */
    const {
        control,
        handleSubmit,
        setValue,
        watch,
        reset
    } = useForm({
        defaultValues
    });

    /**
    * It creates a link for the user to share.
    */
    const onCreate = () => {
        handleSubmit((data) => {
            delete data["link"];
            const params = {
                product_id: data.product,
                quantity  : data.quantity || undefined,
                ios_r     : data.ios_r === WEB_URL ? WEB_URL : undefined,
                android_r : data.android_r === WEB_URL ? WEB_URL : undefined,
                web_r     : data.web_r
            };
            setValue("link", `${UNILINK_URL}?${parseUrl(params as QueryObject)}`);
        })();
    };

    /**
    * It downloads the QR code as an image.
    */
    const handleDownloadQR = () => {
       // Get the SVG element
       const svg = document.getElementById("qr-gen");
       if (!(svg instanceof SVGElement)) {
           console.error("SVG element not found or is not an SVGElement");
           return;
       }
       // Serialize the SVG to a string
       const serializer = new XMLSerializer();
       const svgString = serializer.serializeToString(svg);

       // Create a blob from the SVG string
       const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });

       // Create a download link
       const downloadLink = document.createElement("a");
       downloadLink.href = URL.createObjectURL(blob);
       downloadLink.download = "Deep-Link-Simulator-QR.svg";
       document.body.appendChild(downloadLink);
       downloadLink.click();
       document.body.removeChild(downloadLink);
    };

    return {
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        onCreate,
        handleDownloadQR
    };
};
export default useUnilinkSimulator;