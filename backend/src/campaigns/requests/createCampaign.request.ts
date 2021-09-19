import { IsNotEmpty } from "class-validator";

export class CreateCampaignRequest {
  @IsNotEmpty({ message: "userId is not empty!" })
  userId: string;

  @IsNotEmpty({ message: "name is not empty" })
  name: string;
}
