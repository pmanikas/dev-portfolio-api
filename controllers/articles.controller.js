const Article = require("../models/article.model");

const article = Article;

// Retrieve all Articles from the database.
exports.getAll = (req, res) => {
  article.find()
    .then(data => res.send(data))
    .catch(error => res.status(500).send({ message: error.message }));
};

// Find a single Article with an id
exports.getById = (req, res) => {
  const id = req.params.id;
  article.findById(id)
    .then(data => {
      if (!data) res.status(404).send({ message: `Article with id ${id} was not found!` });

      else res.send(data);
    })
    .catch(error => res.status(500).send({ message: error.message }));
};

// Create a new Article
exports.create = async (req, res) => {
  article.create(req.body)
    .then(data => res.send(data))
    .catch(error => res.status(500).send({ message: error.message }));
};


// Update a Article by the id in the request
exports.update = async (req, res) => {
  article.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) res.status(404).send({ message: `Article with id ${id} was not found!` });

      else res.send(req.body);
    })
    .catch(error => res.status(500).send({ message: error.message }));
};

// Delete a Article with the specified id in the request
exports.deleteById = (req, res) => {
  const id = req.params.id;
  article.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Article with id ${id} was not found!`
        });
      }
      
      else res.send();
    })
    .catch(error => res.status(500).send({ message: error.message }));
};

// Delete all Articles from the database.
exports.deleteAll = (req, res) => {
  article.deleteMany()
    .then(_data => res.send())
    .catch(error => res.status(500).send({ message: error.message }));
};
