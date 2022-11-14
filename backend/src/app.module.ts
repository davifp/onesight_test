import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [PrismaModule, EmployeesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
