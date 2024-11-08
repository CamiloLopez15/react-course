import { useState } from "react";
import { AddCategory, GifGrid } from "../components";

function GifExpertApp() {
    const [categories, setCategories] = useState<string[]>(["One Punch"]);

    const onAddCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
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
