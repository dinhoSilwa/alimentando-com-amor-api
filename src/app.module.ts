import { Module } from '@nestjs/common';
import { TextModule } from './modules/text/text.module';

@Module({
  imports: [TextModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
