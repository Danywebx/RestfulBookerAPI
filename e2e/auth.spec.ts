import { test, expect } from '@playwright/test';

interface Token {
    token: string
}

test('Obtener token de autenticación', async ({ request }) => {
    const response = await request.post('/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    await test.step('Verificar que la petición haya sido exitosa success-200', async () => {
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

    })

    await test.step('Verificar que el body devuelva el token', async () => {
        const body: Token = await response.json();
        expect(typeof body.token).toBe('string');
    })
})

test('Obtener token de autenticacón con credenciales incorrectas', async ({ request }) => {
    const response = await request.post('/auth', {
        data: {
            username: 'testuser',
            password: 'test123'
        }
    });

    await test.step('Verificar que la petición haya sido exitosa success-200', async () => {
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

    })

    await test.step('Verificar que el body indique el mensaje de error', async () => {
        const body = await response.json();
        expect(body).toEqual({ reason: 'Bad credentials' });
    })
})