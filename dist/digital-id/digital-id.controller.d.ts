import { DigitalIdService } from './digital-id.service';
export declare class DigitalIdController {
    private digitalIdService;
    constructor(digitalIdService: DigitalIdService);
    runEXE(): Promise<any>;
}
