import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: true }),
      { viewsDir: null }
    ),
    PetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
