'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3000, () => {
     console.log("Server on port 3500");
});
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

let nombre = document.querySelector('#name');
let apellido = document.querySelector('#apellido');
let email = document.querySelector('#email');
let movil = document.querySelector('#movil');
let programa = document.querySelector('#programa');
let nameContacto = document.querySelector('#NameContacto');
let correoContacto = document.querySelector('#correoContacto');

const frmInscripcion = document.querySelector('#frminscripcion');
const frmContacto = document.querySelector('#frmContacto');
const btnInscripcion = document.querySelector('#btnInscripcion');
const respuesta = document.querySelector('#respuesta');
const respond = document.querySelector('#respond');


document.addEventListener('DOMContentLoaded', () => {
     frmInscripcion.addEventListener('submit', validarFomrularioInscripcion);
     frmContacto.addEventListener('submit', validaFormularioContacto);
})


function validarFomrularioInscripcion(e) {
     e.preventDefault();

     nombre = document.querySelector('#name').value;
     apellido = document.querySelector('#apellido').value;
     email = document.querySelector('#email').value;
     movil = document.querySelector('#movil').value;
     programa = document.querySelector('#programa').value;
     
     if( nombre == '' || apellido == '' || email == '' || movil == '' || programa == '') {
          
          const div = document.createElement('div');
          div.classList.add('font-weight-bold','bg-danger','border','text-white','p-2', 'text-center', 'mt-3')
          div.textContent = 'Todos los Campos son obligatorios';
          respuesta.appendChild(div)

          setTimeout(() => {
               div.remove();
          }, 3000);
     } else {

          const msg = {
               to: 'carmendo2@gmail.com', // Change to your recipient
               from: 'carmendo2@hotmail.com', // Change to your verified sender
               subject: 'Sending with SendGrid is Fun',
               text: 'and easy to do anywhere, even with Node.js',
               html: '<strong>and easy to do anywhere, even with Node.js</strong>',
             }

             sgMail
             .send(msg)
             .then(() => {
               const div = document.createElement('div');
               div.classList.add('font-weight-bold','bg-success','border','border-success','text-white','p-2', 'text-center', 'mt-3')
               div.textContent = 'Datos enviados correctamente. Nos pondremos en contacto con ud!!!';
               respuesta.appendChild(div)
     
               setTimeout(() => {
                    div.remove();
               }, 3000);
             })
             .catch((error) => {
                  console.log(error)
             })
          
     }  
     
     resetForm();
}


function validaFormularioContacto(e) {
     e.preventDefault();

     console.log("Estoy en contacto")

     nameContacto = document.querySelector('#NameContacto').value;
     correoContacto = document.querySelector('#correoContacto').value;

     if( nameContacto == '' || correoContacto == '' ) {
          const div = document.createElement('div');
          div.classList.add('font-weight-bold','bg-danger','border','text-white','p-2', 'text-center', 'mt-3')
          div.textContent = 'Todos los Campos son obligatorios';
          respond.appendChild(div)

          setTimeout(() => {
               div.remove();
          }, 4000);

     } else {
          const div = document.createElement('div');
          div.classList.add('font-weight-bold','bg-success','border','border-success','text-white','p-2', 'text-center', 'mt-3')
          div.textContent = 'Recibimos su mensaje, muy pronto estaremos en contacto !!!';
          respond.appendChild(div)

          setTimeout(() => {
               div.remove();
          }, 4000);
     }

     resetForm();
}

function resetForm(){
     frmInscripcion.reset();
     frmContacto.reset();
}



 