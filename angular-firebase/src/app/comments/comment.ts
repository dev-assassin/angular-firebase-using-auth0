export class Comment {
    constructor(
        public user: string,
        public uid: string,
        public picture: string,
        public text: string,
        public timestamp: number
    ) {}

    // Workaround because Firestore won't accept class instance
    // as data when adding documents; must unwrap instance to save.
    public get getObj(): object {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }
}
