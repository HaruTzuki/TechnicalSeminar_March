import { check } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 15,
    duration: '1m',
    insecureSkipTLSVerify: true
};

export default () => {
    const url = 'http://localhost:5000/todos';
    
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
    });
};
