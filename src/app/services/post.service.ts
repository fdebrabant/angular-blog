import { Post } from "../post-list-item/models/post.model";

export class PostService {
    like: boolean = false;
    dislike: boolean = false;
    lastUpdate = new Date ();

    postOne: Post =
        {
            id: 1,
            title : "How to cook a pizza", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus libero quas aliquid provident ipsa ratione.",
            loveIts: 8,
            created_at: this.lastUpdate
        };
    
    postTwo: Post =
        {
            id: 2,
            title : "How fix a problem", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus libero quas aliquid provident ipsa ratione.",
            loveIts: 12,
            created_at: this.lastUpdate
        };

    postThree: Post =
        {
            id: 3,
            title : "How to say 'I want break up' to Brad Pitt", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus libero quas aliquid provident ipsa ratione.",
            loveIts: 54,
            created_at: this.lastUpdate
        };
    
    posts = [this.postOne, this.postTwo, this.postThree]
    

    getPostById(id: number): Post | undefined{
        const post = this.posts.find(
            (postObject: any) => {
                return postObject.id === id;
            }
        );
        return post;
    }

}