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
        return this.lottoUserRepository.find();
    }
}
