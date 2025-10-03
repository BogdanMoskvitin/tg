export interface IMessages {
    name: string; // Имя чата
    type: string; // Тип чата
    id: number; // id чата
    messages: IMessage[]; // Массив сообщений
}

export interface IMessage {
    id: number; // id сообщения
    type: 'message' | 'service'; // Тип сообщения
    date: string; // Дата отправки сообщения
    date_unixtime: number; // Дата отправки сообщения в unix формате
    from: string; // Автор сообщения
    from_id: string; // id автора сообщения
    text: string; // Текст сообщения
    text_entities: [ //
        {
            type: string; //
            text: string; //
        }
    ];
    edited: string;
    edited_unixtime: string;
    reply_to_message_id: number;
    file: string;
    file_size: number;
    media_type: string;
    mime_type: string;
    duration_seconds: number;
    file_name: string;
    thumbnail: string;
    thumbnail_file_size: number;
    sticker_emoji: string;
    width: number;
    height: number;
    reactions: IReaction[];
    photo: string;
    photo_file_size: number;
    forwarded_from: string;
    actor: string;
    actor_id: string;
    action: string;
    message_id: number;
    self_destruct_period_seconds: number;
    location_information: {
        latitude: number;
        longitude: number;
    };
    media_spoiler: boolean;
    live_location_period_seconds: number;
    discard_reason: string;
}

interface IReaction {
    type: string;
    count: number;
    emoji: string;
    recent: [
        {
            from: string;
            from_id: string;
            date: string;
        }
    ]
}