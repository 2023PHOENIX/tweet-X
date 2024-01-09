class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = this.model.create(data);

      return response;
    } catch (e) {
      console.log("something went wrong in crud repo");
      throw e;
    }
  }

  async destory(id) {
    try {
      const response = this.model.findByIdAndDelete(id);
      return response;
    } catch (e) {
      console.log("something went wrong in crud repo");
      throw e;
    }
  }
  async get(id) {
    try {
      const response = this.model.findById(id);
      return response;
    } catch (e) {
      console.log("something went wrong in crud repo");
      throw e;
    }
  }
  async getAll() {
    try {
      const response = this.model.find({});
      return response;
    } catch (e) {
      console.log("something went wrong in crud repo");
      throw e;
    }
  }
}

export default CrudRepository;
