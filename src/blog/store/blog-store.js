class BlogStore {
  constructor() {
    this.latestEntry = null;
  }
  get latest() {
    return this.latestEntry;
  }
  set latest(entry) {
    this.latestEntry = entry;
  }
}
export default new BlogStore();
