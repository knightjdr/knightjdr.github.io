class BlogStore {
  constructor() {
    this.archived = [];
    this.latestEntry = null;
    this.selected = null;
  }
  get archive() {
    return this.archived;
  }
  get item() {
    return this.selected;
  }
  get latest() {
    return this.latestEntry;
  }
  set archive(list) {
    this.archived = list;
  }
  set item(entry) {
    this.selected = entry;
  }
  set latest(entry) {
    this.latestEntry = entry;
  }
}
export default new BlogStore();
