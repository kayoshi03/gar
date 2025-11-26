"use client"

import {Photo} from "@/components/carousel/Photo";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {PhotoTypes} from "@/types/Photo.types";
import {AddPhoto} from "@/components/addPhoto/AddPhoto";

const handleDragStart = (e) => e.preventDefault();

type Carousel = {
    list: PhotoTypes[],
    category: string
}

export  const Carousel = ({list, category}:Carousel) => {

    console.log(list)

    return (
        <div className={"container"}>
            <AliceCarousel
                disableDotsControls
                infinite
                responsive={{
                    0: {items: 1},
                    768: {items: 1},
                    1024: {items: 1}
                }}

            >
                {
                    list?.map((item) => (
                        <Photo src={item.url} title={item.url} path={item.path} id={item.id} key={item.id}/>
                    ))
                }
            </AliceCarousel>
            <AddPhoto category={category}/>
        </div>
    )
}