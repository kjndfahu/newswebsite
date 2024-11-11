'use client'
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import debounce from 'lodash.debounce';

interface Props {
    className?: string;
    inputValue: string;
    setInputValue: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({ inputValue, setInputValue, className }) => {
    const [debouncedValue, setDebouncedValue] = useState(inputValue);

    const handleChange = debounce((value: string) => {
        setInputValue(value);
    }, 500);

    useEffect(() => {
        handleChange(debouncedValue);

        return () => {
            handleChange.cancel();
        };
    }, [debouncedValue]);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDebouncedValue(e.target.value);
    };

    return (
        <div className={`flex items-center gap-2 rounded-full px-[20px] border-[1px] border-[#b0b0b0] flex-row py-[10px] w-[50%] ${className}`}>
            <Search color="#b0b0b0" />
            <input
                className="w-full focus:outline-none focus:ring-0"
                placeholder="Введите текст..."
                type="text"
                value={debouncedValue}
                onChange={onInputChange}
            />
        </div>
    );
};
