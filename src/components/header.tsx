import { SearchBar } from "@/components/searchbar";
import { HeaderFilters } from "@/components/header-filters";

interface Props {
    className?: string;
    setData: React.Dispatch<React.SetStateAction<string[]>>;
    data: string[];
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    sortOrder:any;
    setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>; // Add setSortOrder here
}

export const Header: React.FC<Props> = ({ setData, data, sortOrder, inputValue, setInputValue, className, setSortOrder }) => {
    return (
        <div className={`flex py-[25px] px-[120px] shadow-lg gap-10 items-center ${className}`}>
            <h2 className="font-semibold text-[38px] leading-[42px]">News</h2>
            <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
            <HeaderFilters data={data} setData={setData} sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>
    );
};
