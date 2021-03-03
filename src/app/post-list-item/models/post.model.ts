export class Post {
    public id!: number;
    public title!: string;
    public content!: string;
    public loveIts!: number;
    public created_at!: Date;

    constructor(
        id: number,
        title: string, 
        content: string, 
        loveIts: number, 
        created_at: Date
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = created_at;
    }
}
