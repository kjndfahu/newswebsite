import {Search} from "lucide-react";

interface Props{
    className?:string
}

export const SearchBar:React.FC<Props> = ({className}) => {
    return (
        <div className="flex items-center gap-2 rounded-full px-[20px] border-[1px] border-[#b0b0b0] flex-row py-[10px] w-[50%]">
            <Search color="#b0b0b0" />
            <input className=" focus:outline-none focus:ring-0e" placeholder="Введите текст..." type="text"/>
        </div>
    )
}