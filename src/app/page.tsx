import {Carousel} from "@/components/carousel/Carousel";
import {supabase} from "@/lib/supabase/client";
import {PhotoTypes} from "@/types/Photo.types";
const fetchData = async (): Promise<PhotoTypes[]> => {
    const {data, status} = await supabase.from("images").select("*")
    if(status === 200 && data) {
        const res:PhotoTypes[] = await Promise.all(
            data.map(async (item) => {
                const src = await supabase.storage.from("gar").getPublicUrl(item.path)
                return {
                    ...item, url: src.data.publicUrl
                } as PhotoTypes
            })
        )
        return res
    }
    return []
}
export default async function Home() {
    const data:PhotoTypes[] = await fetchData()
    const pants = data.filter(a => a.category === "pants")
    const outwear = data.filter(a => a.category === "outwear")
    const shoes = data.filter(a => a.category === "shoes")
    return (
    <div>
        <h1>Гардероб Евы Васильевны Вологодской</h1>
        <h2>Плечевая одежда</h2>
        <Carousel list={outwear} category={"outwear"}/>
        <h2>Поясная одежда</h2>
        <Carousel list={pants} category={"pants"}/>
        <h2>Обувь</h2>
        <Carousel list={shoes} category={"shoes"}/>
    </div>
  );
}
