import { IsEnum, IsInt, IsString } from 'class-validator';
import { MEDIA_TYPE } from 'src/common/enum/media-type.enum';

export class CreateMessageDto {
  @IsInt()
  senderId: number;

  @IsInt()
  recipientId: number;

  @IsInt()
  conversationId: number;

  @IsString()
  content: string;

  @IsString()
  mediaUrl: string;

  @IsString()
  @IsEnum(MEDIA_TYPE)
  mediaType: MEDIA_TYPE;
}
