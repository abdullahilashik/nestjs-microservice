export const KAFKA_BROKER = process.env.KAFKA_BROKER ?? 'localhost:9002';
export const KAFKA_CLIENT_ID = "eventflowapp";
export const KAFKA_CONSUMER_GROUP = "eventflowapp-consumer";

// kafka topics
export const KAFKA_TOPICS = {
    // auth events
    USER_REGISTERED: 'user.registered',
    USER_LOGIN: 'user.login',
    PASSWORD_RESET_REQUESTED: 'password.reset-requested',


    // event events
    EVENT_CREATED: 'event.created',
    EVENT_UPDATED: 'event.updated',
    EVENT_DELETED: 'event.deleted',
    EVENT_TICKET_CREATED: 'event.ticket.created',
    EVENT_CANCELLED: 'event.cancelled',

    // ticket events
    TICKET_PURCHASED: 'tickeet.purchased',
    TICKET_CANCELLED: 'ticket.cancelled',
    TICKET_CHECKED_IN: 'ticket.checked-in',

    // payments events
    PAYMENT_COMPLETED: 'payment.completed',
    PAYMENT_FAILED: 'payment.failed',
    PAYMENT_REFUNDED: 'payment.refunded',

    // notification triggers
    SEND_EMAIL: 'notification.send-email',
    SEND_PUSH: 'notification.send-push',
} as const;

export type KafkaTopics = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];