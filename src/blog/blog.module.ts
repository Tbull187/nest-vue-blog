import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogSchema } from './schemas/blog.schema';

@Module({
  // MongooseModule.forFeature() registers the models that should be registered
  // with this module. Without this, @InjectModel() wouldn't work.
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])
  ],
  providers: [BlogService],
  controllers: [BlogController]
})
export class BlogModule {}
