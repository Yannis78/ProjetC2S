export class Messages {
    lat: string;
    lng: string;
    device: string;
    type: string;
    timestamp: string;       
    count: number;
    payload_cleartext: string;
    protocol_data: {
        port: string;
        deveui: string;
    };
}