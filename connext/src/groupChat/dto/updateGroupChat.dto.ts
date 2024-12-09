import { GroupChat } from '../groupChat.entity';
import { Column } from 'typeorm';

export class UpdateGroupChatDto {
    @Column({ length: 100, unique: true }) groupName: string;
}