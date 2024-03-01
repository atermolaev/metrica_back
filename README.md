# Metrica project back

Для корректной работы проекта нужно создать файл ".sequelizerc" в корне проекта.
Необходимые настройки для него: env, config, models-path, seeders-path, migrations-path.
Пример находится в файле: .sequelizerc_common

Для работы с БД нужно в корне проетка создать файл dbconfig.js.
Пример содержания: 
module.exports = {
    login: 'login',
    pass: 'password',
}