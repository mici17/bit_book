export class User {
    constructor(user) {
        this.id = user.id;
        this.email=user.email;
        this.avatar=user.avatarUrl;
        this.firstName=user.name.first;
        this.lastName=user.name.last;
        this.job=user.about.job;
        this.bio=user.about.bio;

    }
}