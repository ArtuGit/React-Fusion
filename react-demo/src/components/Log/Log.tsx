import '../../App.css'
import {getCurrentTime} from "../../utils/utils.ts";

export interface LogMessage {
    time: string;
    type: 'info' | 'warning';
    message: string;
}


type LogMessageContent = Omit<LogMessage, 'time'>;

interface LogProps {
    messages: LogMessage[];
}

export const createLogMessage = (message: LogMessageContent): LogMessage => {
    return {
        time: getCurrentTime(),
        ...message,
    };
}

export const Log: React.FC<LogProps> = ({ messages }: LogProps) => {
    const getMessageClass = (type: string) => {
        switch (type) {
            case 'info':
                return 'text-green-500';
            case 'warning':
                return 'text-yellow-500';
            default:
                return '';
        }
    };

    return (
        <div className="my-4 p-4 bg-gray-900 text-white rounded-lg min-h-3 overflow-y-auto">
            <ul>
                {messages.map((log, index) => (
                    <li key={index} className="font-mono">
                        <span className="text-gray-500">{log.time}</span>
                        <span className={`${getMessageClass(log.type)}`}> [{log.type}] </span>
                        <span> {log.message} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};