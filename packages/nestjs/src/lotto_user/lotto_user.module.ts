import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LottoUser } from "./entity/lotto-user.entity";
import { LottoUserController } from "./lotto_user.controller";
import { LottoUserService } from "./lotto_user.service";
import { NumberHash } from "./entity/number-hash.entity";

@Module({
    imports: [TypeOrmModule.forFeature([LottoUser, NumberHash])],
    providers: [LottoUserService],
    controllers: [LottoUserController],
})
export class LottoUserModule {}
