import { ChangeEvent, FormEvent, useState } from "react";

interface AddCategoryProps {
    onAddCategory: (category: string) => void;
}

const AddCategory = ({ onAddCategory }: AddCategoryProps) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => setInputValue(value);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formattedInput = inputValue.trim();
        if (formattedInput.length < 1) return;
        onAddCategory(formattedInput);
        setInputValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                name="Search"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default AddCategory;
