const { postService } = require('../service');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, data } = await postService.createPost(id, title, content, categoryIds);
  return res.status(status).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await postService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.findById(id);
  return res.status(status).json(data);
};

module.exports = {
  createPost,
  findAll,
  findById,
};