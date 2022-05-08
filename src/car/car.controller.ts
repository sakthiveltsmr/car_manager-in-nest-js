import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  //get method
  @Get()
  async getCars() {
    return this.carService.getCars();
  }
  @Post()
  async postCars(@Body() car: CarDto) {
    return this.carService.postCars(car);
  }
  @Get(':id')
  async getCarsById(@Param('id') id: number) {
    return this.carService.getCarById(id);
  }
  @Delete(':id')
  async deleteCars(@Param('id') id: number) {
    return this.carService.deleteCarById(id);
  }
  @Put(';id')
  async putCarsById(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.carService.putCarById(id, propertyName, propertyValue);
  }
}
