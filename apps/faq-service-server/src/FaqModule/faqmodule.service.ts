import { Injectable } from "@nestjs/common";
import { CreateFaqDto } from "../faqModule/CreateFaqDto";
import { DeleteFaqDto } from "../faqModule/DeleteFaqDto";
import { UpdateFaqDto } from "../faqModule/UpdateFaqDto";

@Injectable()
export class FaqModuleService {
  constructor() {}
  async CreateFaq(args: CreateFaqDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteFaq(args: DeleteFaqDto): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async UpdateFaq(args: UpdateFaqDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
