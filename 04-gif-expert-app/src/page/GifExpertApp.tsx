import { useState } from "react";
import AddCategory from "../components/AddCategory";
import GifGrid from "../components/GifGrid";

function GifExpertApp() {
    const [categories, setCategories] = useState<string[]>(["One Punch"]);

    const onAddCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
        // setCategories([...categories, "Nueva categoría"]);
        setCategories((c) => [newCategory, ...c]);
    };

    return (
        <div>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid category={category} key={category} />
            ))}
        </div>
    );
}

export default GifExpertApp;
