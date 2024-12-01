import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialForm: T) => {
    const [formState, setFormState] = useState<T>(initialForm);

    const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState((current) => ({ ...current, [name]: value }));
    };

    const onResetForm = () => setFormState(initialForm);
    return { ...formState, formState, onChangeInput, onResetForm };
};
