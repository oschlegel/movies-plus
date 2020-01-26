import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Movie {
  @Field()
  Title: string;
  @Field()
  Year: string;
  @Field()
  Rated: string;
  @Field()
  Released: string;
  @Field()
  Runtime: string;
  @Field()
  Genre: string;
  @Field()
  Director: string;
  @Field()
  Writer: string;
  @Field()
  Actors: string;
  @Field()
  Plot: string;
  @Field()
  Language: string;
  @Field()
  Country: string;
  @Field()
  Awards: string;
  @Field()
  Poster: string;
  @Field(type => [MovieRating])
  Ratings: MovieRating[];
  @Field()
  Metascore: string;
  @Field()
  imdbRating: string;
  @Field()
  imdbVotes: string;
  @Field()
  imdbID: string;
  @Field()
  Type: string;
  @Field()
  DVD: string;
  @Field()
  BoxOffice: string;
  @Field()
  Production: string;
  @Field()
  Website: string;
  @Field()
  Response: string;
}

@ObjectType()
export class MovieRating {
  @Field()
  Source: string;
  @Field()
  Value: string;
}
