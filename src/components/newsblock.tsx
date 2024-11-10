interface Props{
    className?:string,
}

export const Newsblock:React.FC<Props> = ({className}) => {
    return(
        <div className="flex flex-row items-center rounded-[10px] bg-white gap-5 text-black w-full p-[25px] shadow-lg">
            <img className="h-[200px] rounded-[15px] w-auto" src="https://img.championat.com/s/732x488/news/big/p/u/gvardiola-ustanovil-lichnyj-trenerskij-antirekord_1731191661929549317.jpg" alt=""/>
            <div className="flex flex-col gap-2">
                <div className="flex gap-3 text-white">
                    <div className="bg-[#b0b0b0] rounded-full px-3 py-1">Спорт</div>
                </div>
                <h1 className="text-[28px] cursor-pointer leading-[32px] font-semibold hover:underline">Гвардиола
                    установил личный тренерский
                    антирекорд</h1>
                <h2 className="text-[18px] leading-[22px]">Главный тренер футбольного клуба «Манчестер Сити» Хосеп
                    Гвардиола впервые в тренерской карьере проиграл четыре матча подряд. Об этом сообщает статистический
                    портал Opta Sport.Напомним, «Манчестер Сити» проиграл четыре последние встречи в трёх различных
                    турнирах: «Тоттенхэму» (1:2) в Кубке лиги, «Борнмуту» (1:2)...</h2>
                <h3 className="text-[#b0b0b0] text-[16px] leading-[19px]">10 ноября 2024, 01:34 МСК</h3>
            </div>
        </div>
    )
}