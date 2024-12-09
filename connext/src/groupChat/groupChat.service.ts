import { GroupChat } from './groupChat.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupChatRepository } from './groupChat.Repository';
import { MessagesConstant } from 'src/common/constants/messages.constant';
import { UpdateGroupChatDto } from './dto/updateGroupChat.dto';

@Injectable()
export class GroupChatService {
  constructor(
    @InjectRepository(GroupChat)
    private readonly groupChatRepository: GroupChatRepository,

  ) {}

  async groupRegister(groupName: string, userId: number): Promise<GroupChat> {

    const groupChat = this.groupChatRepository.createGroupChat({
      groupName
    });
  
    console.log(MessagesConstant.GROUP_CHAT_CREATED);
  
    return groupChat;
  }
  

  async deleteGroupChat(groupName: string): Promise<GroupChat | null> {
    const groupChat = await this.groupChatRepository.findOneByGroupName(groupName);
    await this.groupChatRepository.deleteGroupChat(groupName);
    return null;
  }

  async updateGroupChat(
    groupName: string,
    updateGroupChatDto: UpdateGroupChatDto,
  ): Promise<GroupChat> {
    const groupChat = await this.groupChatRepository.findOneByGroupName( groupName );

    Object.assign(groupChat, updateGroupChatDto);
    return this.groupChatRepository.save(groupChat);
  }
  
}
