import { Sequelize } from 'sequelize';

export const seqObj = new Sequelize('metrica', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    seqObj.authenticate()
    console.log('Соединение с БД было успешно установлено')
} catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
}