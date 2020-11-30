import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

describe("getAll", ()=>{

  it("shoud return an array",()=>{
    const result = service.getAll();
    expect(result).toBeInstanceOf(Array);
  });
});

describe('getOne', () => {
  it("shoud return a movie",()=>{
    service.create({
      title:'Test Movie',
      genres:['test'],
      year: 2000,
    });

    const movie = service.getOne(1);
    expect(movie).toBeDefined();
    expect(movie.id).toEqual(1);
  });

  it("shoud throw 404 error", ()=>{
    try{
      service.getOne(999);
    }catch(e){
      expect(e).toBeInstanceOf(NotFoundException);
      expect(e.message).toEqual('Movie with Id 999 not found.');
    }
  })

});
describe('deleteOne', ()=>{

  it("deletes a movie",()=>{
    service.create({
      title:'Test Movie',
      genres:['test'],
      year: 2000,
    });
    const beforeDelete = service.getAll().length;
    service.deleteOne(1);
    const afterDelete = service.getAll().length;
    expect(afterDelete).toBeLessThan(beforeDelete);

  })

});


});
