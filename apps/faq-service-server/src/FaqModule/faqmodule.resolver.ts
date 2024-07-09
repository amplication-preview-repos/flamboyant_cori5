import * as graphql from "@nestjs/graphql";
import { CreateFaqDto } from "../faqModule/CreateFaqDto";
import { DeleteFaqDto } from "../faqModule/DeleteFaqDto";
import { UpdateFaqDto } from "../faqModule/UpdateFaqDto";
import { FaqModuleService } from "./faqmodule.service";

export class FaqModuleResolver {
  constructor(protected readonly service: FaqModuleService) {}

  @graphql.Mutation(() => String)
  async CreateFaq(
    @graphql.Args()
    args: CreateFaqDto
  ): Promise<string> {
    return this.service.CreateFaq(args);
  }

  @graphql.Mutation(() => Boolean)
  async DeleteFaq(
    @graphql.Args()
    args: DeleteFaqDto
  ): Promise<boolean> {
    return this.service.DeleteFaq(args);
  }

  @graphql.Mutation(() => String)
  async UpdateFaq(
    @graphql.Args()
    args: UpdateFaqDto
  ): Promise<string> {
    return this.service.UpdateFaq(args);
  }
}
