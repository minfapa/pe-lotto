import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { LottoUserService } from "./lotto_user.service";
import { LottoUser } from "./entity/lotto-user.entity";

@Controller("lotto-user")
export class LottoUserController {
    constructor(private readonly lottoUser: LottoUserService) {}

    @Get("get-all")
    async findAll() {
        return this.lottoUser.getAllUsers();
    }

    @Get("get-user")
    async findUser(@Query("id") id: number) {
        return this.lottoUser.getUserById(id);
    }

    @Post("submit")
    async submit(@Body() user: LottoUser) {
        return this.lottoUser.submitUserSurvey(user);
    }
}
