import { Controller, Get } from "@nestjs/common";
import { LottoUserService } from "./lotto_user.service";

@Controller("lotto-user")
export class LottoUserController {
    constructor(private readonly lottoUser: LottoUserService) {}

    @Get("get-all")
    async findAll() {
        return this.lottoUser.getAllUsers();
    }
}
