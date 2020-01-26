import { Module, HttpModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MovieResolver } from './movie/movie.resolver';
import { MovieService } from './movie/movie.service';

@Module({
  imports: [
    HttpModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })
  ],
  providers: [MovieResolver, MovieService]
})
export class AppModule {}
