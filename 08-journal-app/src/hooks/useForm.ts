/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useMemo, useState } from "react";

type ValidationRule<T> = [(value: T) => boolean, string];

export type FormValidations<T extends Record<string, any>> = {
    [K in keyof T]: ValidationRule<T[K]>;
};

export type Validation<T> = {
    [K in keyof T as `${string & K}Invalid`]?: string | null;
};

export const useForm = <T extends Record<string, any>>(
    initialForm: T,
    formValidations?: FormValidations<T>
) => {
    const [formState, setFormState] = useState<T>(initialForm);
    const [formValidation, setFormValidation] = useState<Validation<T>>({});

    useEffect(() => {
        createValidators();
    }, [formState]);

    const isFormValid = useMemo(() => {
        if (!formValidations) return true;
        return Object.values(formValidation).every(
            (value) => value === null || value === undefined
        );
    }, [formValidation]);

    const createValidators = () => {
        if (!formValidations) return;
        const formCheckedValues: any = {};

        for (const formField of Object.keys(formValidations)) {
            if (!formValidations[formField]) return;
            const [fn, errorMessage] = formValidations[formField];

            formCheckedValues[`${formField}Invalid`] = fn(formState[formField])
                ? null
                : errorMessage;
        }

        setFormValidation(formCheckedValues);
    };

    const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState((current) => ({ ...current, [name]: value }));
    };

    const onResetForm = () => {
        setFormState(initialForm);
        setFormValidation({});
    };

    return {
        ...formState,
        formState,
        onChangeInput,
        onResetForm,
        formValidation,
        isFormValid,
        ...formValidation,
    };
};
