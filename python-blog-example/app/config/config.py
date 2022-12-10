SERVER_PORT = 8765
DATABASE_USERNAME = "blog_db_user"
DATABASE_PASSWORD = "blog_db_password"
DATABASE_HOST = "localhost"
DATABASE_SCHEME = "postgres"
DATABASE_PORT = "25432"
DATABASE_DIALECT = "postgresql"
DATABASE_DRIVER = "psycopg2"
# dialect+driver://username:password@host:port/database
CONNECTION_STRING = "{}+{}://{}:{}@{}:{}/{}".format(
    DATABASE_DIALECT,
    DATABASE_DRIVER,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_SCHEME
)
