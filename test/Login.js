const { chromium } = require('playwright');

(async () => {
    try {
        console.log(' Iniciando');
        const browser = await chromium.launch({ headless: false, slowMo: 100 }); // Modo visible con retraso
        const page = await browser.newPage();

        console.log(' Navegando');
        await page.goto('https://llave.uabc.edu.mx/auth/login?SAMLRequest=lVLBbtswDP0VQXdbltomqRCncBsUC9CtRu3usBtrM64GWcpEOej%2Bfo6TbN1hBXYU9R7f4yOXN2%2B9ZXsMZLzLuUwzztA1vjWuy%2FlzfZ8s%2BM1qSdBbtdPFEF%2FdE%2F4YkCIbiY708SfnQ3DaAxnSDnokHRtdFZ8ftEozvQs%2B%2BsZbzgoiDHGUuvOOhh5DhWFvGnx%2Besj5a4w70kKQMSYd4KVJ%2Bzdx6C%2Bq6lGANUCixS0MNhaHB2fr0YdxECfvZ7q1sMcjH9vh0ANG28L6zjjO7n1ocJoj51uwhJxt1jmHy2tsOjlT7WyRye%2Fd1VxezyEzkM1nHagRRCUQmT3%2BoRENuHEUwcWcq0xdJZlKpKwzqeVcK5mqi8U3zsrT9LfGHVP9KKqXI4j0p7ouk%2FKxqjn7et7OCOCnXehJPbxfwseN4Zw8X%2F1vzkvxXvL3MXwZNTbr0lvT%2FDzE2kP8twWZyqli2mQ7QTX2YGzRtgGJuFidRP6%2BsdUv&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=lbECi72jA2Ont76L8T4eqZKtWz6Mhtz1XCcxvXKIEIFWsiU2EQQJ6FRbrNd7poTcTIVfcQ70o4Q4XqanhpaAp8X0gxUKz71fYIaBHYwR5wnkVWEdMgL2FIwRYGp0vLVenOgbZo0pSME7LxnvUt5XIYByF%2F2pnAfvwInpceRr9I2zGhM%2Ff4rAQW%2BKgPB6vnGU2lrpyihh8QK0bKs9hFlGLrk8RxZlWW%2FppD5dxfTKE%2BB9wapoJ6BMYMEg7h7LR5uHcJr%2Bi8gpFqoIfhXaF%2FVKKNL6kOm0Hj3y7E2kqDncIxx1VfDrqa%2FkgPuFs1ot1xgcQQNxjwT%2Fl5aDxZvJ%2F232YQ%3D%3D', { waitUntil: 'domcontentloaded' });
        console.log(' Ingresando usuario y contraseña...');
        await page.fill('input[name="username"]', 'user'); // Ajusta el selector si es necesario
        await page.fill('input[name="password"]', 'password');

        console.log(' Haciendo clic en el botón de login...');
        await page.getByRole('button', { name: 'Ingresar' }).click();
        console.log(' Esperando la redirección post-login...');

        console.log(' Verificando si el login fue exitoso...');
        console.log('URL actual:', page.url());

        if (page.url().includes('siii.uabc.mx')) {
            console.log(' Login exitoso');
        } else {
            console.log(' Fallo el login o redirección incorrecta');
        }

        console.log(' Cerrando navegador...');
        await browser.close();
    } catch (error) {
        console.error(' ERROR:', error);
    }
})();
