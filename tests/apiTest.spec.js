const { test, expect } = require('@playwright/test');

test('Test Get', async ({ request }) => {
    const _response = await request.get('https://reqres.in/api/users/', {
        params: {
            'id': '2',
        }
    })
    expect(_response.status()).toBe(200);
    console.log(await _response.json());

    const response = await _response.json();
    expect(response.data.id).toEqual(2)
})

test('Test Post', async ({ request }) => {
    const _response = await request.post('https://reqres.in/api/users/', {
        data: {
            'id': '2',
            'name': 'Angel',
            'job': 'QA'
        }
    })
    expect(_response.status()).toBe(201);
    console.log(await _response.json());

    const response = await _response.json();
    expect(response.name).toEqual('Angel')
})

test('Test Put', async ({ request }) => {
    const _response = await request.put('https://reqres.in/api/users/', {
        data: {
            'id': '2',
            'name': 'Leonel',
            'job': 'QM'
        }
    })
    expect(_response.status()).toBe(200);
    console.log(await _response.json());

    const response = await _response.json();
    expect(response.name).toEqual('Leonel')
    expect(response.job).toEqual('QM')
})

test('Test Delete', async ({ request }) => {
    const _response = await request.delete('https://fakestoreapi.com/products/1')
    expect(_response.status()).toBe(200);
    console.log(await _response.json());
})
