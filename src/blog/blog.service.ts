import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './Interfaces/post.interface';
import { CreatePostDTO } from './DTO/create-post.dto';

@Injectable()
export class BlogService {

    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>
    ) {}

    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async getPost(postId: number): Promise<Post> {
        const post = await this.postModel.findById(postId).exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        console.log('woot');
        const newPost = await this.postModel(createPostDTO);
        return newPost.save();
    }

    async editPost(postId: number, createPostDTO: CreatePostDTO): Promise<Post> {
        const editPost = await this.postModel.findByIdAndUpdate(postId, createPostDTO, {new: true});
        return editPost;
    }

    async deletePost(postId: number): Promise<any> {
        const deletePost = await this.postModel.findByIdAndRemove(postId);
        return deletePost;
    }

}
