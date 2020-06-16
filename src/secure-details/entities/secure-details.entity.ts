import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SecureDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    secureHash: string;
}