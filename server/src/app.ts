import { FastifyListenOptions } from 'fastify';
import serverBuilder from './server';

const server = serverBuilder();

async function main() {
    try {
        const port = <string>process.env.PORT || '5000';

        const options: FastifyListenOptions = {
            port: parseInt(port),
        };

        await server.listen(options);

        console.log(`Server run on port ${port}`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();
