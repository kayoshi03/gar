"use client"

import {supabase} from "@/lib/supabase/client";
import {useState} from "react";
import {useRouter} from "next/navigation";

export const  AddPhoto = ({category}) => {
    const router = useRouter()
    const [uploading, setUploading] = useState(false)
    const addImage = async (event) => {
        try {
            setUploading(true)
            const file = event?.target.files?.[0]
            if (!file) return
            const filePath = `${category}/${Date.now()}-${file.name}`
            await supabase.storage.from("gar").upload(filePath, file)
            await supabase.from("images").insert({
                 backet: "gar",
                 path: filePath,
                 category
            })
        }
        catch (error) {
        }
        finally {
            setUploading(false)
            router.refresh()
        }
    }

    return (
        <>
           <input type="file" accept="image/*" onChange={addImage} disabled={uploading} />
        </>
    )
}