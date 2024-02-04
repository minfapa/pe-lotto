import { Module } from "@nestjs/common";
import { RdsConfigService } from "./config.service";

@Module({
    providers: [RdsConfigService],
})
export class RdsConfigModule {}
