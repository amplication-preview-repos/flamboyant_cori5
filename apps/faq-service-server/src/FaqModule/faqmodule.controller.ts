import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FaqModuleService } from "./faqmodule.service";
import { UpdateFaqDto } from "../faqModule/UpdateFaqDto";

@swagger.ApiTags("faqModules")
@common.Controller("faqModules")
export class FaqModuleController {
  constructor(protected readonly service: FaqModuleService) {}

  @common.Post("/faq")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateFaq(
    @common.Body()
    body: UpdateFaqDto
  ): Promise<string> {
        return this.service.CreateFaq(body);
      }

  @common.Delete("/faq/:id")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteFaq(
    @common.Body()
    body: UpdateFaqDto
  ): Promise<boolean> {
        return this.service.DeleteFaq(body);
      }

  @common.Put("/faq/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateFaq(
    @common.Body()
    body: UpdateFaqDto
  ): Promise<string> {
        return this.service.UpdateFaq(body);
      }
}
