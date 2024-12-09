import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('GroupChat')
export class GroupChat {
  @PrimaryGeneratedColumn() groupId: number;

  @Column({ length: 100, unique: true }) groupName: string;

  @Column({ type: 'date', nullable: false }) createdAt: Date;

  @ManyToOne(() => User, (user) => user.groups)
  @JoinColumn({ name: 'username' })
  createdBy: User;
}
