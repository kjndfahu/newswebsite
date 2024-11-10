interface Props{
    className?:string;
    data:string[];
    handleAddCategory: (categoryId: string) => void;
}
export const CategoryPopup:React.FC<Props> = ({className, data, handleAddCategory}) => {
    return(
        <div
            className="flex flex-col absolute z-[10] rounded-[10px] mt-[50px] bg-white w-[200px] [box-shadow:0px_0px_10px_0px_rgba(0,0,0,0.25)]">
            <div onClick={() => handleAddCategory('Спорт')} className="w-full h-auto px-5 py-4 border-b-[2px] border-b-[#f7f7f7] hover:bg-[#f7f7f7]">Спорт</div>
            <div onClick={() => handleAddCategory('Политика')} className="w-full h-auto px-5 py-4 border-b-[2px] border-b-[#f7f7f7] hover:bg-[#f7f7f7]">Политика</div>
            <div onClick={() => handleAddCategory('Наука')}  className="w-full h-auto px-5 py-4 border-b-[2px] border-b-[#f7f7f7] hover:bg-[#f7f7f7]">Наука</div>
            <div onClick={() => handleAddCategory('Экономика')} className="w-full h-auto px-5 py-4 border-b-[2px] border-b-[#f7f7f7] hover:bg-[#f7f7f7]">Экономика</div>
            <div onClick={() => handleAddCategory('Погода')}  className="w-full h-auto px-5 py-4 border-b-[2px] border-b-[#f7f7f7] hover:bg-[#f7f7f7]">Погода</div>
        </div>
    )
}