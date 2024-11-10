import {SearchBar} from "@/components/searchbar";
import {HeaderFilters} from "@/components/header-filters";

interface Props{
    className?:string
}
export const Header:React.FC<Props> = ({className}) => {
    return (
        <div className="flex py-[25px] shadow-lg px-[120px] gap-10 items-center">
           <h2 className="font-semibold text-[38px] leading-[42px]">News</h2>
            <SearchBar/>
            <HeaderFilters/>
        </div>
    )
}