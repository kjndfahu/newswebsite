'use client'
import {ChevronDown, ChevronUp, X} from "lucide-react";
import {useState} from "react";
import {CategoryPopup} from "@/components/category-popup";
import {SortPopup} from "@/components/sort-popup";

export const HeaderFilters =() => {
    const [isCategory, setCategory] = useState(false);
    const [isSort, setSort] = useState(false);
    const [data, setData] = useState<string[]>([]);

    const handleAddCategory = (categoryId: string) => {
        setData((prevData) =>
            prevData.includes(categoryId) ? prevData : [...prevData, categoryId]
        );
    };

    const handleRemoveCategory = (categoryId: string) => {
        setData((prevData) => prevData.filter((item) => item !== categoryId));
    };
    console.log(data)
    return (
        <div className="flex text-[18px] leading-[22px] gap-10">
            <div onClick={() => setCategory(!isCategory)} className="flex gap-1 cursor-pointer flex-row">
                {data.length === 0 ? (
                    "Выбрать категорию"
                ) : (
                    data.map((item) => (
                            <div onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveCategory(item)}} key={item} className="flex gap-1 bg-[#b0b0b0] text-white rounded-full px-3 py-1">
                                {item}
                                <X  width={15} color="#ffffff"/>
                            </div>
                        ))

                )}
                {isCategory ? <ChevronUp/> : <ChevronDown/>}
                {isCategory && <CategoryPopup data={data} handleAddCategory={handleAddCategory} /> }
            </div>
            <div onClick={() => setSort(!isSort)} className="flex gap-1 cursor-pointer flex-row">
                Сортировать по
                {isSort ? <ChevronUp/> : <ChevronDown/>}
                {isSort && <SortPopup /> }
            </div>
        </div>
    )
}