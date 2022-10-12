const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports =(sequelize, DataTypes) => {
    const postsvar = sequelize.define("posts", {
        // wrte structure for table, and tt the end we just have to rtun posts

        title : {
            type:DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username : {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })

    return postsvar;
};