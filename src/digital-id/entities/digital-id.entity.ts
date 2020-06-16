import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @Column()
    // customerNumber: string;

    // @Column()
    // givenName: string;

    // @Column()
    // middleName?: string;

    // @Column()
    // surname: string;

    // @Column()
    // provinceState: string;

    // @Column()
    // city: string;

    // @Column()
    // postalCode: string;

    // @Column()
    // address: string;

    // @Column()
    // class: string;

    // @Column()
    // eyeColor: string;

    // @Column()
    // height: string;

    // @Column()
    // sex: string;
}