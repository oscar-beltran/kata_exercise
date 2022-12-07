import { Pool } from 'pg'
import config from '../config/config';

export const pool = new Pool({
    user: config.server.pguser,
    host: config.server.pghost,
    database: config.server.pgdatabase,
    password: config.server.pgpassword,
    port: config.server.pgport
});
