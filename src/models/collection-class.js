"use strict";

class Collection {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    let all = await this.model.findAll();
    return all;
  }

  async createOne(modelInfo) {
    let modelItem = await this.model.create(modelInfo);
    return modelItem;
  }

  async getOne(id) {
    let modelItem = await this.model.findOne({ where: { id: id } });
    return modelItem;
  }

  async updateOne(id, modelInfo) {
    let modelItem = await this.model.findOne({ where: { id } });
    let updateInfo = await modelItem.update(modelInfo);
    return updateInfo;
  }

  async deleteOne(id) {
    await this.model.destroy({ where: { id: id } });
  }
}

module.exports = Collection;
