import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('api/tasks')
export class TasksController {


    @Get()
    getAll(){
        return [1,2,3];
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number){
        return id;
    }

    @Post()
    create(@Body() body: any){
      return body;
    }

    @Put(':id')
    Update(@Param('id') id: number, @Body() body: any)
    {
        return body;
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return id;
    }


}
