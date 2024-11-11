interface Props {
    className?: string;
    article: {
        title: string;
        text: string;
        imageUrl: string;
        category: string;
        createdAt: string;
    };
}

export const Newsblock: React.FC<Props> = ({ className, article }) => {
    const text =
        article.text.length > 350 ? article.text.substring(0, 350) + "..." : article.text;

    const date = new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(new Date(article.createdAt));

    const categoryMap: { [key: string]: string } = {
        SPORT: "Спорт",
        POLICY: "Политика",
        SCIENCE: "Наука",
        ECONOMY: "Экономика",
        WEATHER: "Погода",
    };

    const categoryInRussian = categoryMap[article.category] || article.category;

    return (
        <div className="flex px-[120px] flex-row items-center rounded-[10px] bg-white gap-5 text-black w-full p-[25px] shadow-lg">
            <img className="h-[200px] rounded-[15px] w-auto" src={article.imageUrl} alt="" />
            <div className="flex flex-col gap-2">
                <div className="flex gap-3 text-white">
                    <div className="bg-[#b0b0b0] rounded-full px-3 py-1">{categoryInRussian}</div>
                </div>
                <h1 className="text-[28px] cursor-pointer leading-[32px] font-semibold hover:underline">
                    {article.title}
                </h1>
                <h2 className="text-[18px] leading-[22px]">{text}</h2>
                <h3 className="text-[#b0b0b0] text-[16px] leading-[19px]">{date}</h3>
            </div>
        </div>
    );
};
