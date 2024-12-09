import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupChat } from './groupChat.entity';
import { CreateGroupChatDto } from './dto/createGroup.dto';
import { UpdateGroupChatDto } from './dto/updateGroupChat.dto';

@Injectable()
export class GroupChatRepository extends Repository<GroupChat> {

  async createGroupChat(createGroupChatDto: CreateGroupChatDto): Promise<GroupChat> {
    const { groupName } = createGroupChatDto;

    const newGroupChat = this.create({groupName});

    return await this.save(newGroupChat);
  }

  async findAllGroupChats(): Promise<GroupChat[]> {
    return this.find();
  }

  async findOneByGroupName(groupName: string): Promise<GroupChat | null> {
    return this.findOne({ where: { groupName } });
  }

  async findOneByCreator(userName: string): Promise<GroupChat | null> {
    return this.findOne({
      where: { createdBy: { userName } }, 
      relations: ['createdBy'], 
    });
  }
  
  async updateGroupChat(
    groupName: string,
    updateGroupChatDto: UpdateGroupChatDto,
  ): Promise<void> {
    await this.update({ groupName }, updateGroupChatDto);
  }

  async deleteGroupChat(groupName: string): Promise<void> {
    await this.delete({ groupName });
  }

}