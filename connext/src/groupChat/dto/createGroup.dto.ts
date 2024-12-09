import { GroupChat } from '../groupChat.entity';
import { Column, ManyToOne, JoinColumn } from 'typeorm';

export class CreateGroupChatDto {

    @Column({ length: 100, unique: true }) groupName: string;
  
}