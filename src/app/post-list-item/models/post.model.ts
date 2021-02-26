export class Post {
    public title!: string;
    public content!: string;
    public loveIts!: number;
    public created_at!: string;

    constructor(
        title: string, 
        content: string, 
        loveIts: number, 
        created_at: string
    ) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = created_at;
    }
}
