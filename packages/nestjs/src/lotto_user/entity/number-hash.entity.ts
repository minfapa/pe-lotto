import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
    name: "number_hash",
    schema: "lotto",
    synchronize: false,
})
export class NumberHash {
    @PrimaryColumn({ name: "lotto_number" })
    lottoNumber: number;

    @Column({ name: "lotto_hash" })
    lottoHash: string;
}
