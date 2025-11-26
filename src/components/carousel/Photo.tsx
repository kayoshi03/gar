"use client"

import {supabase} from "@/lib/supabase/client";
import {useRouter} from "next/navigation";
import {X} from "lucide-react";

type Photo =  {
    src: string,
    title: string,
    path: string[],
    id: string
}
export const Photo = ({src, title, path, id}:Photo) => {
    const router = useRouter()
    const onRemove = async () => {
        await supabase.storage.from("gar").remove(path)
        await supabase.from("images").delete().eq("id", id)
        router.refresh()
    }

    return (
        <div className={"photo"}>
            <button className={"close"} onClick={() => onRemove()}><X width={16}/></button>
            <img src={src} title={title} alt={title}/>
        </div>
    )
}