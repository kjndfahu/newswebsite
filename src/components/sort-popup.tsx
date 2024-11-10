interface Props{
    className?:string;
}
export const SortPopup:React.FC<Props> = ({className}) => {
    return(
        <div
            className="flex flex-col absolute z-[10] rounded-[10px] mt-[50px] bg-white w-[270px] [box-shadow:0px_0px_10px_0px_rgba(0,0,0,0.25)]">
            <div className="w-full h-auto px-5 py-4 border-b-[2px] border-b-[#f7f7f7] hover:bg-[#f7f7f7]">По дате(самые новые)</div>
            <div className="w-full h-auto px-5 py-4 border-b-[2px] border-b-[#f7f7f7] hover:bg-[#f7f7f7]">По дате(самые старые)</div>
        </div>
    )
}