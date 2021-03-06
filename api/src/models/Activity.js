const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('activity', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      autoincrement: false,
      allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        autoincrement: false,
        allowNull: false,
    },
    season: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
};
