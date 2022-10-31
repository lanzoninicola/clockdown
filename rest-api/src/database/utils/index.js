const chalk = require("chalk");
const log = console.log;

async function isColumnExists({ queryInterface }, tableName, columnName) {
    try {
        log(
            chalk.blueBright(
                `==> Checking if column "${columnName}" in table "${tableName.toUpperCase()}" exists...`
            )
        );

        const table =
            await queryInterface.sequelize.queryInterface.describeTable(
                tableName
            );

        log(
            chalk.blueBright(
                `==> Column exists: ${table[columnName] !== undefined}`
            )
        );

        return table[columnName] !== undefined;
    } catch (error) {
        throw new Error(error);
    }
}

async function addColumn(
    { queryInterface },
    tableName,
    columnName,
    columnOptions
) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
        const exists = await isColumnExists(
            { queryInterface },
            tableName,
            columnName
        );

        if (exists === true) {
            log(
                chalk.blueBright(
                    `==> Column "${columnName}" in table "${tableName.toUpperCase()}" already exists. Skipping...`
                )
            );

            return;
        }

        log(
            `==> Creating column "${columnName}" in table "${tableName.toUpperCase()}"`
        );

        await queryInterface.addColumn(
            tableName,
            columnName,
            { ...columnOptions },
            { transaction }
        );

        log(
            chalk.green(
                `==> Column "${columnName}" created successfully in table "${tableName.toUpperCase()}"`
            )
        );

        await transaction.commit();
    } catch (error) {
        await transaction.rollback();

        log(
            chalk.red(
                `==> Error adding column "${columnName}" in table "${tableName.toUpperCase()}: ${
                    error.message
                }"`
            )
        );

        throw new Error(error);
    }
}

async function addBulkColumn({ queryInterface }, tableName, columns) {
    try {
        for (const column of columns) {
            await addColumn(
                { queryInterface },
                tableName,
                column.name,
                column.options
            );
        }
    } catch (error) {
        throw new Error(error);
    }
}

async function removeColumn({ queryInterface }, tableName, columnName) {
    const transaction = await queryInterface.sequelize.transaction();

    log(`==> Starting removing column ${columnName} from table ${tableName}`);

    try {
        const exists = await isColumnExists(
            { queryInterface },
            tableName,
            columnName
        );

        if (exists === false) {
            log(
                chalk.blueBright(
                    `==> Column "${columnName}" in table "${tableName.toUpperCase()}" doesn't exists. Skipping...`
                )
            );

            return;
        }

        await queryInterface.removeColumn(tableName, columnName, {
            transaction
        });

        // if exists an enum type, drop it
        await queryInterface.sequelize.query(
            `DROP TYPE IF EXISTS public."enum_${tableName.toLowerCase()}_${columnName}";`,
            {
                transaction
            }
        );

        await transaction.commit();

        log(
            chalk.greenBright(
                `==> Ending removing column ${columnName} from table ${tableName}`
            )
        );
    } catch (error) {
        await transaction.rollback();

        throw new Error(error);
    }
}

async function removeBulkColumn({ queryInterface }, tableName, columns) {
    try {
        for (const column of columns) {
            await removeColumn({ queryInterface }, tableName, column);
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    isColumnExists,
    addColumn,
    addBulkColumn,
    removeColumn,
    removeBulkColumn
};
