import { Injectable } from "@nestjs/common";
import { LottoUser } from "./entity/lotto-user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class LottoUserService {
    constructor(
        @InjectRepository(LottoUser)
        private readonly lottoUserRepository: Repository<LottoUser>
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
}
