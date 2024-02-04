import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LottoUserModule } from "./lotto_user/lotto_user.module";
import * as fs from "fs";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: "postgres",
                host: process.env.RDS_DB_HOST,
                port: parseInt(process.env.RDS_DB_PORT, 10),
                username: process.env.RDS_DB_USERNAME,
                password: process.env.RDS_DB_PASSWORD,
                database: process.env.RDS_DB_NAME,
                autoLoadEntities: true,
                synchronize: false,
                ssl: {
                    rejectUnauthorized: true,
                    ca: fs.readFileSync(process.env.RDS_CERT_PATH).toString(),
                },
            }),
        }),
        LottoUserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
