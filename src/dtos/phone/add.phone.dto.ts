export class AddPhoneDto {
    name: string;
    categoryId: number;
    description: string;
    ramSize: number;
    storageSize: number;
    screenSize: number;
    networks: {
        networkId: number;
        value: string;
    }[];
}