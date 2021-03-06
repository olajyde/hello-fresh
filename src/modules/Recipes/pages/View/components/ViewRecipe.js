import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './ViewRecipe.scss';

const ViewRecipe = props => {
  const { recipe } = props;

  const {
    title,
    photo,
    tags,
    description,
    ingredients = [],
    instructions = [],
    id
  } = recipe || {};

  return (
    <div className="view-recipe-container">
      <div className="img-container">
        <img className="recipe-img" src={photo} alt={title} sizes="100vw" />
      </div>
      <div className="details-container">
        <div className="recipe-details">
          <div className="title-control">
            <h1>{title}</h1>
            <Link to={`/recipes/${id}/edit`}>
              <i className="fas fa-edit" />
            </Link>
          </div>
          <div className="recipe-tag">{tags}</div>
          <p>{description}</p>
          {ingredients.length > 0 && (
            <Fragment>
              <div className="divider" />
              <div className="recipe-section">
                <h4>Ingredients</h4>
                <ul>
                  {ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </Fragment>
          )}
          {instructions.length > 0 && (
            <Fragment>
              <div className="divider" />
              <div className="recipe-section">
                <h4>Instructions</h4>
                <ol>
                  {instructions.map((instruction, idx) => (
                    <li key={idx} className="steps">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
