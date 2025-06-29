import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Link from '../../assets/Game01/Link.svg';
import img1 from '../../assets/Game01/1.svg';
import img2 from '../../assets/Game01/2.svg';
import img3 from '../../assets/Game01/3.svg';
import img4 from '../../assets/Game01/4.svg';


// Initial items
const initialItems = [
    { id: "1", order: 1, image: img1},
    { id: "2", order: 2, image: img2},
    { id: "3", order: 3, image: img3},
    { id: "4", order: 4, image: img4}
];

export default function Game01() {
    const [items, setItems] = useState(initialItems);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const updatedItems = Array.from(items);
        const [movedItem] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, movedItem);

        setItems(updatedItems);
    };

    console.log(items);

    const handleClick = () => {
        alert("Button Clicked!");
    };

    return(
        <div className="h-screen relative">
            <h1 className="text-4xl absolute top-1/12 left-1/2 transform -translate-x-1/2 font-black px-16 py-2 text-white w-full text-center">Build The Train in Order</h1>


            <div className="py-40 top-6/12 left-1/2 transform -translate-x-1/2 absolute w-3/4 h-[500px] -translate-y-1/2">
                <div className="grid grid-cols-3 w-full h-full">
                    <div className="flex items-center justify-center">
                        <img src={Link} alt="Link" className="w-5 sm:w-8 lg:w-12 xl:w-20 " />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Link} alt="Link" className="w-5 sm:w-8 lg:w-12 xl:w-20 " />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Link} alt="Link" className="w-5 sm:w-8 lg:w-12 xl:w-20 " />
                    </div>
                </div>
            </div>

            {/* Drag & drop */}
            <div className="top-6/12 left-1/2 transform -translate-x-1/2 absolute w-full h-[500px] -translate-y-1/2">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="grid" direction="horizontal">
                        {(provided) => (
                            <div
                                className="grid grid-cols-4 w-full h-full"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                className="relative"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <img src={item.image} alt={item.label} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-15 sm:w-24 lg:w-36 xl:w-60" />

                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>


            <button className="text-2xl absolute top-10/12 left-1/2 transform -translate-x-1/2 font-black px-16 py-2 text-center text-red-600 bg-white rounded-4xl hover:cursor-pointer hover:bg-yellow-400 transition"
                onClick={handleClick}
            >Confirm The Build
            </button>
        </div>
    )
}