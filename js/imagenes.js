const divGaleria = document.getElementById('galeria');
const siguiente = document.getElementById('siguiente');
const iframe = document.createElement('iframe');

const embed = "embed"
const estructura = "https://www.instagram.com/p/"

const imagenes = [
    'CdTcH0xs8BT/', 'CdL16dBrBFG/', 'CdG8_TqLqXs/',
    'CaiJPkkraRl/', 'Cae_xPkLrto/', 'Cadg6r9Dt2E/',
    'CUDwsrYDR2c/', 'CTkNWy2jwZC/', 'CTfbMxKDf-F/',
    'CRWuJj7j8tf/', 'CRRn5DKDxQv/', 'CRM7WH-jNTy/',
    'CPoNTOFjflD/', 'CPlaz0pD2iQ/', 'CPf4CKjj3if/',
    'CNyJk9HDNPS/', 'CNvj3jyjf7Q/', 'CNtFJzjjoIQ/',
    'CNnJIyNDSYI/', 'CNYeGcajaJh/', 'CNTGEAaDg7h/',
    'CNQX-_YDpM9/', 'CNLSFElDj1S/', 'CNIawToD97X/',
    'CM2nhBKjH5u/', 'CMxMtN0jMZ4/', 'CMund6EjGeN/',
    'CMNugvADQ6l/', 'CMIkXzjjzz0/', 'CMF9YmpjTcd/',
    'CL2AhH0jUAO/', 'CLxmdckjDNu/', 'CLuxoWPj1iZ/',
    'CLfjBHfjO6w/', 'CLcrMwIDQb6/', 'CLaavoIDKQn/',
    'CLU-BO4DdCV/', 'CLSpoV9DPno/', 'CLK_q9LDQoP/',
    'CKRwsD2D6YO/', 'CKPRp7GjKYY/', 'CKNIAdxDqim/',
    'CKHK2HXDW1N/', 'CKElV5EjIeO/', 'CKB28fjjJg1/',
    'CJ8t2Dxj_Y4/', 'CJ55PMPD6wn/', 'CJ3NRPWDQwI/',
    'CJ1JE0yjp1B/', 'CJzOEn7jThD/', 'CJv0Xv-Dz5j/',
    'CJtOlvaDfmh/', 'CJqsltLDQ9e/', 'CJoIozkjdK-/',
    'CJjsBV8jkO_/', 'CJgjBfJDs5E/', 'CJe_L3oDZpR/',
    'CJbP0q_D72T/', 'CJV5i_GDukt/', 'CJTQC4uDp1k/', 
    'CJOsElsj1Uk/', 'CJLj-4sjBms/', 'CJGa7CcjM-p/', 
    'CJD_JLfj3Ek/', 'CI_Xxd0Dbb6/', 'CI8YdwUlYkP/', 
    'CI3V7PHlA82/', 'CI07ZcElAF4/', 'CIv_541FIsi/'
  ]

let n_img = 0; 
let n_counter = 0;

for(let i=0; i<6; i++){
  let iframe = document.createElement('iframe');
  iframe.src = estructura+imagenes[i]+embed;
  iframe.alt = "Imagen de Instagram";
  iframe.className = "instagram-img";
  n_img++;
  divGaleria.appendChild(iframe);
}
siguiente.addEventListener('click', () => {
  n_counter = n_img + 6;

  if(n_counter >= imagenes.length){
    n_counter = imagenes.length;
  }

  for(let i=n_img; i<n_counter; i++){
    let iframe = document.createElement('iframe');
    iframe.src = estructura+imagenes[i]+embed;
    iframe.alt = "Imagen de Instagram";
    iframe.className = "instagram-img";
    n_img++;

    divGaleria.appendChild(iframe);
  }
})