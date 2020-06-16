export class CreateDigitalIdDto {
}

export class DigitIdDto {
    formatVersion: number;
    passTypeIdentifier: string;
    serialNumber: string;
    webServiceURL: string;
    authenticationToken: string;
    teamIdentifier: string;
    locations: any[];
    barcode: any;
    organizationName: string;
    description: string;
    logoText: string;
    foregroundColor: string;
    backgroundColor: string;
    generic: any[];
}