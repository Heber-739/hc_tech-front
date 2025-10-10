import { CompanyData } from '../../../interfaces/company';

function generateNames(): { name: string; company_name: string } {
  const prefijos = ["Tech","Eco","Agro","Bio","Global","Digital","Smart","Nova","Innova","Blue","Green","Urban","Next","Vision","Prime"];
  const sufijos = ["Solutions","Systems","Group","Labs","Corp","Works","Soft","Industries","Consulting","Enterprises","Services","Networks","Holdings"];
  const razones = ["S.A.", "S.R.L.", "S.A.S.", "C.A.", "Ltda."];

  const name = prefijos[Math.floor(Math.random() * prefijos.length)] +
    sufijos[Math.floor(Math.random() * sufijos.length)];

  const company_name = `${name} ${razones[Math.floor(Math.random() * razones.length)]}`;

  return {name , company_name};
}

/**
 * Genera un nombre de calle aleatorio (simplificado para el ejemplo).
 */
function generarNombreCalle(incluirNumero: boolean = true): string {
    const tipos = ['Calle', 'Avenida', 'Bulevar'];
    const nombres = ['San Martín', 'Belgrano', 'Libertador', 'España', 'Córdoba', 'Junio'];

    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const numero = incluirNumero ? Math.floor(Math.random() * 4800) + 100 : '';

    return `${tipo} ${nombre} ${numero}`.trim();
}

/**
 * Genera un año de fundación razonable (entre 10 y 60 años de antigüedad).
 */
function generarFechaFundacion(): Date {
    const hoy = new Date();
    const anioMinimo = hoy.getFullYear() - 60; // Máximo 60 años de antigüedad
    const anioMaximo = hoy.getFullYear() - 10;  // Mínimo 10 años de antigüedad
    const anioAleatorio = Math.floor(Math.random() * (anioMaximo - anioMinimo + 1)) + anioMinimo;

    return new Date(anioAleatorio, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
}

const nbrs = '0123456789';

const  generarCUIT = (): string =>  '##-########-#'.replace(/[#]/g, () => nbrs[Math.floor(Math.random() * nbrs.length)]);


export function generarEmpresas(cantidad: number): CompanyData[] {
    const empresas: CompanyData[] = [];

    const domins = ['com', 'com.ar', 'net', 'org'];
    const mails = ['info', 'contacto', 'ventas', 'soporte'];

    for (let i = 0; i < cantidad; i++) {
        const {name,company_name} = generateNames();
        const domin = domins[Math.floor(Math.random() * domins.length)];
        const webHost = `${name.replace(" ", "").toLowerCase()}.${domin}`;

        const phone_number = parseInt('549XX########'.replace(/[X#]/g, () =>  nbrs[Math.floor(Math.random() * nbrs.length)]));

        empresas.push({
            id: generarCUIT(),
            name,
            company_name,
            web_page: `https://www.${webHost}`,
            address: generarNombreCalle(true),
            fundation_year: generarFechaFundacion(),
            email: `${mails[Math.floor(Math.random() * mails.length)]}@${webHost}`,
            phone_number,
            image:"https://store-images.s-microsoft.com/image/apps.20966.13599037783181022.b05b7adf-6b7a-44ae-9a70-9dc9370ea7e6.4cd88c60-6ff1-4b0f-aed6-8e2efa5629c1"
        });
    }

    return empresas;
}
