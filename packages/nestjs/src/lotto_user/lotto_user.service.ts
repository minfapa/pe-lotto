import { Injectable } from "@nestjs/common";
import { LottoUser } from "./entity/lotto-user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NumberHash } from "./entity/number-hash.entity";

@Injectable()
export class LottoUserService {
    constructor(
        @InjectRepository(LottoUser)
        private readonly lottoUserRepository: Repository<LottoUser>,
        @InjectRepository(NumberHash)
        private readonly numberHashRepository: Repository<NumberHash>
    ) {}

    async getAllUsers(): Promise<LottoUser[]> {
        return await this.lottoUserRepository.find();
    }

    async submitUserSurvey(user: LottoUser) {
        return await this.lottoUserRepository.save(user);
    }

    async getUserById(id: number) {
        return await this.lottoUserRepository.findOneBy({ id });
    }

    async decodeHash(hash: string) {
        return await this.numberHashRepository.findOneBy({ lottoHash: hash });
    }
}
