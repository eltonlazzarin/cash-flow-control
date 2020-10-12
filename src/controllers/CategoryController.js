const db = require('../database/connection');

class CategoryController {
  async index(request, response) {
    const categories = await db('categories').select('categories.id', 'categories.name');

    return response.json({ categories });
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await db('categories').where('categories.id', id).select('*');

    const categoryId = category.find((item) => item.id === id);

    if (!categoryId) {
      return response.status(400).json({ message: 'Category not found.' });
    }

    return response.status(200).json({ categoryId });
  }

  async update(request, response) {
    const { name } = request.body;
    const { id } = request.params;

    const category = await db('categories').where('categories.id', id).select('*');

    const categoryId = category.find((item) => item.id === id);

    if (!categoryId) {
      return response.status(400).json({ message: 'Category not found.' });
    }

    await db('categories')
      .where('id', id)
      .update({ name });

    return response.status(201).json();
  }

  async delete(request, response) {
    const { id } = request.params;

    const category = await db('categories').where('categories.id', id).select('*');

    const categoryId = category.find((item) => item.id === id);

    if (!categoryId) {
      return response.status(400).json({ message: 'Category not found.' });
    }

    await db('categories')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
}

module.exports = new CategoryController();
