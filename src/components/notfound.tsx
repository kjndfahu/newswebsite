import {Frown} from "lucide-react";

export const NotFound = () => {
    return (
        <div className="flex flex-col gap-5 min-h-[80vh] items-center justify-center">
            <Frown width={150} height={150} color="#b0b0b0"/>
            <h1 className="text-[45px] font-semibold text-[#b0b0b0] leading-[50px]">Статьи не найдены</h1>
        </div>
    )
}