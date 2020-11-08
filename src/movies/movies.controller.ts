import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { get } from 'http';

@Controller('movies')
export class MoviesController {

    @Get()
    gettAll(){
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string){
        return `This will return one Movie with the id: ${movieId}`;
    }

    @Post()
    create(){
        return "This will create a movie";
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `This will delete a movie with the id:${movieId}`
    }

    @Patch('/:id')
    Patch(@Param('id') movieId:string){
        return `This will patch a movie with the id:${movieId}`;
    }



}
