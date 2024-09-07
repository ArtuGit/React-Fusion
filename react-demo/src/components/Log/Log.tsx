import '../../App.css'

export interface LogMessage {
    type: 'info' | 'warning';
    message: string;
}

interface LogProps {
    messages: LogMessage[];
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
                        <span className={`${getMessageClass(log.type)}`}> [{log.type}] </span>
                        <span> {log.message} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};