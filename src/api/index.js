// import { TranslationService } from "./translation";
 import { SettingService } from "./setting";
 import { HomeService } from "./home";
 import { TermConditionService } from "./term-condition";
 import { ItemService } from "./service";
 import { AboutService } from "./about";
 import { CareerService } from "./career";
 import { PortfolioService } from "./portfolio";
 import { PrivacyService } from "./privacy";
 import { TeamService } from "./team";
 import { FaqService } from "./faq";
 import { ConsaltanService } from "./consaltan";
 import { TestimonialService } from "./testimonial";
//  import { ChooseUsService } from "./choose-us";
//  import { CounterService } from "./counter";
const api = {
  // translation: new TranslationService(),
   setting: new SettingService(),
   home: new HomeService(),
   termCondition: new TermConditionService(),
   service: new ItemService(),
   about: new AboutService(),
   career: new CareerService(),
   portfolio: new PortfolioService(),
   privacy: new PrivacyService(),
   team: new TeamService(),
   faq: new FaqService(),
   consaltan: new ConsaltanService(),
   testimonial: new TestimonialService(),
  //  chooseUs: new ChooseUsService(),
  //  counter: new CounterService(),
};
export default api;
