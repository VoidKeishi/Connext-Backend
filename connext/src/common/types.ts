import { Conversation } from 'src/conversation/entities/conversation.entity';
import { Friendship } from 'src/friends/entities/friendship.entity';
import { GroupChat } from 'src/group-chat/entities/group-chat.entity';
import { GroupMember } from 'src/group-chat/entities/group-member.entity';
import { GroupMessage } from 'src/group-chat/entities/group-message.entity';
import { Message } from 'src/messages/entities/messages.entity';
import { User } from 'src/users/entities/user.entity';

export type SendMessageEventPayload = {
  message: Message;
};

export type CreateGroupChatEventPayload = {
  groupChat: GroupChat;
  members: GroupMember[];
};

export type UpdateGroupChatNameEventPayload = {
  groupChat: GroupChat;
  members: number[];
};

export type AddNewMemberEventPayload = {
  groupChat: GroupChat;
  leader: User;
  newMembers: GroupMember[];
};

export type RemoveMemberEventPayload = {
  groupChat: GroupChat;
  removedMember: GroupMember;
};

export type LeaveGroupEventPayload = {
  groupChat: GroupChat;
  leaveMember: User;
};

export type SendGroupMessageEventPayload = {
  groupMessage: GroupMessage;
};

export type NewFriendRequest = {
  newFriendRequest: Friendship;
};

export type AcceptFriendRequest = {
  senderConversation: Conversation;
  recipientConversation: Conversation;
};
