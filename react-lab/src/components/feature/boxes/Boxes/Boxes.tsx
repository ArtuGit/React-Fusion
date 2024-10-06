import '../../../../App.css'
import {Box, BoxActionEnum} from "../Box/Box.tsx";
import {FC, useState} from "react";
import {StatLine} from "../StatLine/StatLine.tsx";
import {StatItem} from "../StatItem/StatItem.tsx";
import {createLogMessage, Log, LogMessage} from "../Log/Log.tsx";

interface BoxesProps {
    amount: number;
}

export const Boxes: FC<BoxesProps> = ({ amount }: BoxesProps) => {
    const [boxes, setBoxes] = useState<boolean[]>(new Array(amount).fill(false));
    const [logMessages, setLogMessages] = useState<LogMessage[]>([createLogMessage({ type: 'warning', message: 'Lets start the game!' })]);

    let gameOver: boolean = false;
    const setBoxesItem = (index: number, action: BoxActionEnum) => {

        gameOver = boxes.length === 1 && action === BoxActionEnum.Delete;

        setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            switch (action) {
                case BoxActionEnum.AddLeft:
                    newBoxes.splice(index, 0, false);
                    break;
                case BoxActionEnum.AddRight:
                    newBoxes.splice(index + 1, 0, false);
                    break;
                case BoxActionEnum.TurnOver:
                    newBoxes[index] = !newBoxes[index];
                    break;
                case BoxActionEnum.Delete:
                    newBoxes.splice(index, 1);
                    break;
            }
            return newBoxes;
        });

        setLogMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            switch (action) {
                case BoxActionEnum.AddLeft:
                    newMessages.unshift(createLogMessage({ type: 'info', message: `A new box was added to the left of  ${index + 1} box` }));
                    break;
                case BoxActionEnum.AddRight:
                    newMessages.unshift(createLogMessage({ type: 'info', message: `A new box was added to the right of  ${index + 1} box` }));
                    break;
                case BoxActionEnum.TurnOver:
                    newMessages.unshift(createLogMessage({ type: 'info', message: `Box ${index + 1} was ${boxes[index] ? 'disabled' : 'enabled'}` }));
                    break;
                case BoxActionEnum.Delete:
                    newMessages.unshift(createLogMessage({ type: 'info', message: `Box ${index + 1} was deleted` }));
                    break;
            }
            if (gameOver) {
                newMessages.unshift(createLogMessage({ type: 'warning', message: 'Game over!' }));
            }
            return newMessages;
        });
    }

    const boxesComponents = [];
    const boxesAmount = (logMessages.length === 1) ? amount : boxes.length;

    for (let i = 0; i < boxesAmount; i++) {
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
                <StatItem label="Total" value={boxesAmount}/>
                <StatItem label="Selected" value={boxes.filter(isSelected => isSelected).length}/>
            </StatLine>
            <div className="p-4">
                <Log messages={logMessages}/>
            </div>
        </div>
    );
};