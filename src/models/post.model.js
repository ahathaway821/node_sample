/**
 * @swagger
 * definitions:
 *   PostResponse:
 *     properties:
 *       id:
 *         type: string
 *       userId:
 *         type: string
 *       title:
 *         type: string
 *       body:
 *         type: string
 */
class Post {
    constructor() {
        this.id = "";
        this.userId = "";
        this.title = "";
        this.body = "";
    }
}
module.exports = Post;
