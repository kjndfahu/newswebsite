import {Newsblock} from "@/components/newsblock";

export default function Home() {
  return (
    <div className="flex flex-col gap-7 pt-[50px] px-[120px]">
      <Newsblock/>
        <Newsblock/>
        <Newsblock/>
        <Newsblock/>
    </div>
  );
}
