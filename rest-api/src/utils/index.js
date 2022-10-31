exports.formatContent = (content, atributes) => {
    // if (!Object.keys(content).length || !Object.keys(atributes).length) {
    //     throw `Nenhuma propriedade do objeto informada`;
    // }

    let values = {};
    for (let key in atributes) {
        if (content.hasOwnProperty(key)) {
            values[key] = content[key];
        }
    }

    //
    // if (!Object.keys(values).length) {
    //     throw  `Nenhuma propriedade do objeto informada`;
    // }

    return values;
};

exports.senhaAdmin = () => {
    const bcrypt = require("bcrypt");
    const date = new Date();
    return bcrypt.hashSync(
        "l!mb3r" +
            (date.getFullYear() + date.getDate() * 100 + date.getMonth()),
        12
    );
};

exports.tryParseInt = (value, defaultValue) => {
    try {
        return value ? parseInt(value, 10) : defaultValue;
    } catch (err) {
        return defaultValue;
    }
};
