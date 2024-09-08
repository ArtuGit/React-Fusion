import '../../App.css'
import { Box } from "../Box/Box.tsx";
import {useState} from "react";
import {StatLine} from "../StatLine/StatLine.tsx";
import {StatItem} from "../StatItem/StatItem.tsx";
import {createLogMessage, Log, LogMessage} from "../Log/Log.tsx";

interface BoxesProps {
    amount: number;
}

export const Boxes = ({ amount }: BoxesProps) => {
    const [boxes, setBoxes] = useState<boolean[]>(new Array(amount).fill(false));
    const [logMessages, setLogMessages] = useState<LogMessage[]>([createLogMessage({ type: 'warning', message: 'Lets start the game!' })]);

    const  setBoxesItem = (index: number, ) => {
        setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            newBoxes[index] = !newBoxes[index];
            return newBoxes;
        });

        setLogMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            newMessages.unshift(createLogMessage({ type: 'info', message: `Box ${index + 1} was ${boxes[index] ? 'disabled' : 'enabled'}` }));
            return newMessages;
        });
    }

    const boxesComponents = [];

    for (let i = 0; i < amount; i++) {
        boxesComponents.push(<
            Box key={i} index={i} isSelected={boxes[i]} setBoxesItem={setBoxesItem}
        />);
    }

    return (
        <div className="flex-col flex-nowrap">
            <div className="flex flex-wrap justify-center items-center">
                {boxesComponents}
            </div>
            <StatLine>
                <StatItem label="Total" value={amount}/>
                <StatItem label="Selected" value={boxes.filter(isSelected => isSelected).length}/>
            </StatLine>
            <div className="p-4">
                <Log messages={logMessages}/>
            </div>
        </div>
    );
};