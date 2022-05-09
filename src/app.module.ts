import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sakthi1234:sakthi1234@cluster0.xvd8m.mongodb.net/car-management?authSource=admin&replicaSet=atlas-2f2f3d-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
    ),
    CarModule,
  ],
})
export class AppModule {}
