import 'dotenv/config';

import application from './application';

((): void => {
  application.listen(3000, (): boolean =>
    process.stdout.write(`Server running at port http://localhost:${3000}\n`)
  );
})();
