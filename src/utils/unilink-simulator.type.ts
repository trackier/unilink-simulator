import { Control, FieldValues, UseFormReset, UseFormSetValue, UseFormWatch } from "react-hook-form";

export interface IFormProps {
    setValue: UseFormSetValue<{
        [key: string]: string;
    }>; 
    watch: UseFormWatch<{
        [key: string]: string;
    }>; 
    control:Control<FieldValues>;
    onCreate: () => void; reset: UseFormReset<{
        [key: string]: string;
    }>
}