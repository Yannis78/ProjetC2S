export class Device {
    id: number;
    label: string;
    recycled: boolean;
    profile: {
        id: number;
        link: string;
    };
    enabled: boolean;
    link: string;
    group: {
        id: number;
        link: string;
    };
    status: string;
    properties: {
        firmware_version: string;
        hardware_version: string;
        external_id: string;
        deveui: string;
        appeui: string;
    };
}
