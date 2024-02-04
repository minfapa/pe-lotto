import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class RdsConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        const isDebugMode = this.configService.get("STAGE") === "dev";
        return {
            type: "postgres",
            username: this.configService.get<string>("RDS_DB_USER"),
            password: this.configService.get<string>("RDS_DB_PASSWORD"),
            port: +this.configService.get<number>("RDS_DB_PORT"),
            host: this.configService.get<string>("RDS_DB_HOST"),
            database: this.configService.get<string>("RDS_DB_DATABASE"),
            entities: ["dist/**/**/*.entity{.ts,.js}"],
            logging: isDebugMode ? ["query", "error"] : ["error"],
            synchronize: false,
            // cache: {
            //     type: "redis",
            //     options: {
            //         host: "localhost",
            //         port: 6379,
            //     },
            //     ignoreErrors: true,
            //     duration: 60000, // 30 seconds
            // },
            // namingStrategy: new SnakeNamingStrategy(),
            // autoLoadEntities: true,
        };
    }
}
