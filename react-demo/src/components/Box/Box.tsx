import '../../App.css'
import React, { useState } from 'react';
import { FaTrash, FaArrowRight, FaArrowLeft, FaSyncAlt } from 'react-icons/fa';

export enum BoxActionEnum {
    AddLeft = 'AddLeft',
    AddRight = 'AddRight',
    TurnOver = 'TurnOver',
    Delete = 'Delete'
}

interface BoxProps {
    index: number;
    isSelected: boolean;
    setBoxesItem: (index: number, action: BoxActionEnum) => void;
}

export const Box = ({ index, isSelected, setBoxesItem }: BoxProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative w-52 h-52 mx-4 my-4 border-4 border-dashed border-gray-200 rounded-lg ${isSelected ? 'bg-blue-400' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div className="absolute bottom-0 left-0 right-0 flex justify-around p-2">
                    <button className="button-press-effect" onClick={() => setBoxesItem(index, BoxActionEnum.AddLeft)}>
                        <FaArrowLeft />
                    </button>
                    <button className="button-press-effect" onClick={() => setBoxesItem(index, BoxActionEnum.TurnOver)}>
                        <FaSyncAlt />
                    </button>
                    <button className="button-press-effect" onClick={() => setBoxesItem(index, BoxActionEnum.Delete)}>
                        <FaTrash />
                    </button>
                    <button className="button-press-effect" onClick={() => setBoxesItem(index, BoxActionEnum.AddRight)}>
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
};