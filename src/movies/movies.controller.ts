import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, } from '@nestjs/common';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
import { get } from 'http';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { UpdateMovieDto } from './DTO/update-movie';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){

    }

    @Get()
    gettAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param('id') movieId: number):Movie{
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData:CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    Patch(@Param('id') movieId:number, @Body() updateData:UpdateMovieDto){
        return this.moviesService.update(movieId, updateData);
    }




}
