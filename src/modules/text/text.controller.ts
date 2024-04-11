import { Controller, Get, Param } from '@nestjs/common';
import { TextService } from './text.service';

@Controller('text')
export class TextController {
    constructor(private readonly text: TextService) {}

    @Get('home/first-square')
    homeFirstSquare() {
        return this.text.homeFirstSquare();
    }

    @Get('home/second-square/:part')
    homeSecondSquare(@Param('part') part: number) {
        return this.text.homeSecondSquare(part);
    }

    @Get('home/third-square')
    homeThirdSquare() {
        return this.text.homeThirdSquare();
    }

    @Get('home/main-text/:paragraph')
    homeMainText(@Param('paragraph') paragraph: number) {
        return this.text.homeMainText(paragraph);
    }

    @Get('our-history/we-are/:paragraph')
    ourHistoryWeAre(@Param('paragraph')paragraph: number) {
        return this.text.ourHistoryWeAre(paragraph);
    }

    @Get('our-history/our-objectivies/paragraph')
    ourHistoryOurObjectiviesParagraph() {
        return this.text.ourHistoryOurObjectiviesParagraph();
    }

    @Get('our-history/our-objectivies/what-we-want-make/:part')
    ourHistoryOurObjectviesWhatWeWantMake(@Param('part')part: number) {
        return this.text.ourHistoryOurObjectiviesWhatWeWantMake(part);
    }

    @Get('our-history/our-objectivies/what-we-need/:part')
    ourHistoryOurObjectiviesWhatWeNeed(@Param('part')part: number) {
        return this.text.ourHistoryOurObjectiviesWhatWeNeed(part);
    }

    @Get('our-history/goals/paragraph')
    ourHistoryGoalsParagraph() {
        return this.text.ourHistoryGoalsParagraph();
    }

    @Get('our-history/goals/:part')
    ourHistoryGoals(@Param('part')part: number) {
        return this.text.ourHistoryGoals(part);
    }

    @Get('our-history/side-square')
    ourHistorySideSquare() {
        return this.text.ourHistorySideSquare();
    }

    @Get('help-us/be-a-voluntary/:paragraph')
    helpUsBeAVoluntary(@Param('paragraph')paragraph: number) {
        return this.text.helpUsBeAVoluntary(paragraph);
    }

    @Get('help-us/make-a-donation')
    helpUsMakeADonation() {
        return this.text.helpUsMakeADonation();
    }

    @Get('simios-group/:paragraph')
    simiosGroup(@Param('paragraph')paragraph: number) {
        return this.text.simiosGroup(paragraph);
    }
}
