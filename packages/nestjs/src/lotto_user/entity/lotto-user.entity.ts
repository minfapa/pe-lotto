import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "lotto_user", schema: "lotto", synchronize: false })
export class LottoUser {
    @PrimaryColumn({ name: "id" })
    id: number;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "parish" })
    parish: string;

    @Column({ name: "age_group" })
    ageGroup: string;

    @Column({ name: "gender" })
    gender: string;

    @Column({ name: "is_elected" })
    isElected: boolean;
}
