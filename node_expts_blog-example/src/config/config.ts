import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8765;
const PGUSER = process.env.PGUSER || 'blog_db_user';
const PGPASSWORD = process.env.PGPASSWORD || 'blog_db_password';
const PGHOST = process.env.PGHOST || 'localhost';
const PGDATABASE = process.env.PGDATABASE || 'postgres';
const PGPORT = process.env.PGPORT? parseInt(process.env.PGPORT) : 25432;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    pguser: PGUSER,
    pgpassword: PGPASSWORD,
    pghost: PGHOST,
    pgdatabase: PGDATABASE,
    pgport: PGPORT
};

const config = {
    server: SERVER
};

export default config;
