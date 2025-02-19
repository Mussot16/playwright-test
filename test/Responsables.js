const { chromium } = require('playwright');

(async () => {
    try{
        const browser = await chromium.launch({ headless: false, slowMo: 100 }); // Modo visible con retraso
        const page = await browser.newPage();

        console.log(' Navegando');
        await page.goto('https://llave.uabc.edu.mx/auth/login?SAMLRequest=lVLBbtswDP0VgXdbtpsEqRCn8BYUC9C1Ru32sBtrM4kMWcpMOej%2Bfo6TbO2hBXoU9R7f4yMXN6%2BtEQfqWDubQhxGIMhWrtZ2m8JTeRvM4Wa5YGxNsldZ73f2kX73xF4MRMvq9JNC31nlkDUriy2x8pUqsp93Kgkjte%2Bcd5UzIDJm6vwg9d1Z7lvqCuoOuqKnx7sUdt7vWUnJ2oc9vlRh%2ByqP7WVRPEg0GlnWtMHe%2BOz4ALEabGiLfrR%2BYRuDBzrxqe6PPXBwLY3bagvi1nUVjWOksEHDBGK9SgGvMNpuqvmsbupmGidXetvs4l3TNJNIJwOGc2TWB%2FrPYu5pbdmj9SkkUTINoiSI52U0U9FETa%2FDZDL7BSI%2Fz%2F5N21OmnwX1cgKx%2BlGWeZA%2FFCWI58tuBgCcN6FG9e7tCj5vjJfcYfnFlBfyreK%2FS7gfJNar3Bld%2FTmG2qL%2F2EEcxmNF18FmhCpqUZusrjtiBrk8i7w%2FsOVf&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=Oq07sf7S6Q%2FOiVDZkCBlO0R7Lb0yDQEiNqvNlEW96GzCM2Nm%2FkW0qNA6ufTbnU%2BaIC9cJ0W7rVhy%2BNC%2BS87MOQqj49C0K1b%2FpucxXmXnKno%2BMAydAbhjyoK0PJZS84%2B3Fj7P1yebtCT9gnIxO9%2F8YxGsEJQLzCK4KgmsR1TRfHLKLhMXdcqbkCjRZpCWqSjLiEuEa8gfzfhEccCelUlY3X3QfMlO9B3pL3Wuzr8DQimume2%2Fhm27mHXtsooubqUrslzKpDLmD5DqJt4j9n1eXv46u25avneHPvXki%2FKGOroM0vAZNdsmT72qEs9cTm5EeEdRcDpSrLpjZvLc03TOaw%3D%3D', { waitUntil: 'domcontentloaded' });
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
        }
    
        console.log('Redireccionando');
        await page.locator('.url_sistema.uk-button.uk-button-primary').nth(8).click();
        console.log('Seleccionando plan de estudios');
        await page.locator('a.seleccionarExpediente').nth(0).click(); // Cambia el índice según sea necesario
        console.log('yendo a modulo correcto');
        await page.click('#directorioResponsable a');
        console.log('Seleccionando el campus Ensenada');
        await page.selectOption('#selectCampus', '3');  
        await page.selectOption('#selectLocalidades', '3');
        console.log('Seleccionando la localidad Ensenada');
        await page.selectOption('#selectUnidadAcademica', '290');
        console.log('Se selecciono la FIAD');
        await page.click('#btnFiltrarDirectorio');
        console.log('Se hizo clic en el boton de buscar');
        await page.click('button.dropdown-toggle');
        console.log('Haciendo clic en el botón de exportación...');
        await page.waitForSelector('li[data-type="pdf"] a', { state: 'visible' });
        console.log('Haciendo clic en "PDF');
        await page.click('li[data-type="pdf"] a');
        await page.goto('file:///C:/Users/franc/Downloads/directorio_responsables.pdf', { waitUntil: 'domcontentloaded' });
        await browser.close();
      } catch (error) {
        console.error(' ERROR:', error);
    }
   } )();