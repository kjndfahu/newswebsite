'use client'
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CategoryPopup } from "@/components/category-popup";
import { SortPopup } from "@/components/sort-popup";

interface Props {
    setData: React.Dispatch<React.SetStateAction<string[]>>;
    data: string[];
    sortOrder:any;
    setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>; // Added setSortOrder prop
}

export const HeaderFilters: React.FC<Props> = ({ data,sortOrder, setData, setSortOrder }) => {
    const [isCategory, setCategory] = useState(false);
    const [isSort, setSort] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const storedData = localStorage.getItem("selectedCategories");
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("selectedCategories", JSON.stringify(data));
        }
    }, [data, isClient]);

    const handleAddCategory = (categoryId: string) => {
        setData((prevData) =>
            prevData.includes(categoryId) ? prevData : [...prevData, categoryId]
        );
    };

    const handleRemoveCategory = (categoryId: string) => {
        setData((prevData) => prevData.filter((item) => item !== categoryId));
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc')); // Toggle sort order
    };

    if (!isClient) return null;
    console.log(sortOrder)

    return (
        <div className="flex text-[18px] leading-[22px] gap-10">
            <div onClick={() => setCategory(!isCategory)} className="flex gap-1 cursor-pointer flex-row">
                {data.length === 0 ? (
                    "Выбрать категорию"
                ) : (
                    data.map((item) => (
                        <div onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveCategory(item);
                        }} key={item} className="flex gap-1 bg-[#b0b0b0] text-white rounded-full px-3 py-1">
                            {item}
                            <X width={15} color="#ffffff" />
                        </div>
                    ))
                )}
                {isCategory ? <ChevronUp /> : <ChevronDown />}
                {isCategory && <CategoryPopup data={data} handleAddCategory={handleAddCategory} />}
            </div>
            <div onClick={toggleSortOrder} className="flex gap-1 cursor-pointer flex-row">
                Сортировать по {sortOrder==='desc' ? "дате (новые)" : "дате (старые)"}
            </div>
        </div>
    );
};
